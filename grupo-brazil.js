function switchTheme(){
    const theme = document.getElementById("color").value;
    document.getElementsByTagName("meta") [2].content = theme;
}