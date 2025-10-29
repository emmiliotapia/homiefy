// Agrupa fotos por ventana temporal por chat
const chatId = $json.message.chat.id;
const key = `ticket:${chatId}`;
const now = Date.now();
const windowMs = 120000; // 2 min
const state = this.getWorkflowStaticData('global');
let entry = state[key];
if (!entry || (now - entry.startedAt) > windowMs) {
entry = { startedAt: now, files: [] };
}
const photos = $json.message.photo || [];
if (photos.length) entry.files.push(photos.slice(-1)[0].file_id);
state[key] = entry;
return [{ json: { chatId, fileIds: entry.files, ready: (now - entry.startedAt) > 15000 } }];