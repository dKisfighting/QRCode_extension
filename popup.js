document.addEventListener('DOMContentLoaded', async () => {
  // 获取当前标签页信息
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const url = tab.url;
  const title = tab.title;
  const favicon = tab.favIconUrl;

  // 显示网站名称
  document.getElementById('siteName').textContent = title;
  
  // 显示favicon
  const faviconImg = document.getElementById('favicon');
  faviconImg.src = favicon || 'icons/icon48.png';

  // 生成二维码
  const qr = new QRCode(document.getElementById('qrcode'), {
    text: url,
    width: 200,
    height: 200,
    colorDark: '#1d1d1f',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H
  });

  // 添加下载功能
  document.getElementById('downloadBtn').addEventListener('click', () => {
    // 创建一个更大尺寸的canvas用于下载
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 400;
    
    // 绘制二维码
    const qrImage = document.querySelector('#qrcode img');
    ctx.drawImage(qrImage, 0, 0, 400, 400);
    
    // ���制favicon
    const favicon = document.getElementById('favicon');
    const faviconSize = 64; // 增大favicon尺寸
    const x = (400 - faviconSize) / 2;
    const y = (400 - faviconSize) / 2;
    ctx.drawImage(favicon, x, y, faviconSize, faviconSize);
    
    // 获取当前日期
    const today = new Date();
    // 格式化日期时间，精确到秒
    const dateStr = today.getFullYear() +
      String(today.getMonth() + 1).padStart(2, '0') +
      String(today.getDate()).padStart(2, '0') +
      '_' +
      String(today.getHours()).padStart(2, '0') +
      String(today.getMinutes()).padStart(2, '0') +
      String(today.getSeconds()).padStart(2, '0');
    
    // 创建下载链接
    const link = document.createElement('a');
    // 使用QRCode+日期时间命名文件
    const fileName = `QRCode_${dateStr}.png`;
    link.download = fileName;
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
}); 