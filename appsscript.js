const SPREADSHEET_ID = '1-XRlgY0nF6KU_ATFnvYmivup1mLhi6ovs8m7Z1sHxYc';
const SHEET_NAME = 'Smille';

function doGet(e) {
  try {
    const data = e.parameter

    const sheet = SpreadsheetApp
      .openById(SPREADSHEET_ID)
      .getSheetByName(SHEET_NAME);

    // Cabeçalho automático na primeira vez
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Data', 'Nome', 'E-mail', 'WhatsApp', 'Faturamento', 'Mensagem']);
    }

    sheet.appendRow([
      new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
      data.nome        || '',
      data.email       || '',
      data.whatsapp    || '',
      data.faturamento || '',
      data.mensagem    || '',
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
