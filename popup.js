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
  new QRCode(document.getElementById('qrcode'), {
    text: url,
    width: 200,
    height: 200,
    colorDark: '#1d1d1f',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H
  });
}); 