export default function copyToClipboard(text, msg) {
  // if (!navigator.clipboard) {
  //   // Clipboard API not available
  //   console.log('nooooo');
  //   return;
  // }
  // navigator.clipboard
  //   .writeText(content.file_location)
  //   .then(() => {
  //     alert(`텍스트가 복사되었습니다.
  // ${content.file_location}`);
  //   })
  //   .catch((err) => {
  //     console.error('텍스트 복사 중 오류 발생:', err);
  //     alert('텍스트 복사에 실패했습니다.');
  //   });

  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);

  alert(msg);
}
