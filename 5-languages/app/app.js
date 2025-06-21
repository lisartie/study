const language = navigator.language;
switch (language) {
    case 'ru': console.log('Приветики!❤️');
    break;
    case 'en': console.log('Hi!😳');
    break;
    case 'it': console.log('Ciao!🥰');
    break;
    case 'ko': console.log('안녕😊');
    break;
    case 'mn': console.log('Сайн байна уу😢😢😢');
    break;
    default:
        console.log('аой, нет такого языка пока что...');
}
