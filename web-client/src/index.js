function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'from', 'web clinet'],' ');

    const myIcon = new Image();
    myIcon.src = 'src/logo.png';

    element.appendChild(myIcon);

    return element;
};

document.body.appendChild(component());