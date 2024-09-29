export default function darkMode(){
    console.log('reached')
  if (
    localStorage.theme !== 'dark'
    ) {
      localStorage.theme = 'dark' 
      document.documentElement.classList.add('dark')
    } else {
      localStorage.removeItem('theme')
      document.documentElement.classList.remove('dark')
    }
  }