function changeWeb() {
  
  document.getElementById('code').style.visibility = 'hidden';
  document.getElementById('code').style.opacity = 0;
 
  setTimeout(() => {
      document.getElementById('all').style.display = 'block';
      setTimeout(() => {
          document.getElementById('all').style.visibility = 'visible';
          document.getElementById('all').style.opacity = 1;
          document.getElementById('code').style.display = 'none';
      });
  }, 1500);
}
