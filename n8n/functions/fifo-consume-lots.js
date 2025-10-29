// Descuenta inventario por lotes (FIFO por caducidad y fecha de compra)
const need = $json.itemsToConsume; // [{item_id, qty}]
const lots = $json.lots; // [{lot_id,item_id,remaining_qty,expiry_date,acquired_at}]
const ordered = [...lots].sort((a,b)=>{
const ea = a.expiry_date || '9999-12-31';
const eb = b.expiry_date || '9999-12-31';
return ea.localeCompare(eb) || a.acquired_at.localeCompare(b.acquired_at);
});
const ops = [];
for (const req of need){
let remaining = req.qty;
for (const lot of ordered.filter(l=>l.item_id===req.item_id && l.remaining_qty>0)){
const take = Math.min(lot.remaining_qty, remaining);
if (take>0){
lot.remaining_qty -= take;
remaining -= take;
ops.push({ lot_id: lot.lot_id, item_id: req.item_id, consumed: take });
}
if (remaining<=0) break;
}
if (remaining>0){
ops.push({ item_id: req.item_id, missing: remaining });
}
}
return ops.map(o=>({ json: o }));