
// get the hamburger icon element
const hamburgerIcon = document.getElementById('hamburger');
const navigation = document.getElementById('navMenu');

hamburgerIcon.addEventListener('click', function () {
    navigation.classList.toggle('show');
    hamburgerIcon.classList.toggle('open');
});