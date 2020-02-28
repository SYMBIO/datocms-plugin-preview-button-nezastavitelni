import './style.css';

window.DatoCmsPlugin.init((plugin) => {
  plugin.startAutoResizer();

  const container = document.createElement('div');
  container.classList.add('container');

  let { baseUrl } = plugin.parameters.global;

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'DatoCMS-button DatoCMS-button--primary';
  button.onclick = (e) => {
    let locale = plugin.getFieldValue('language');
    switch (locale) {
      case '2123837':
      case '3162084':
        locale = 'cs';
        baseUrl = baseUrl.replace('{locale}', 'cz');
        break;
      case '2123840':
      case '3162086':
        locale = 'sk';
        baseUrl = baseUrl.replace('{locale}', 'sk');
        break;
      default:
        break;
    }

    const slug = plugin.getFieldValue('slug');
    let path = '';

    switch (plugin.itemType.id) {
      case '183326':
      case '197023': {
        const type = plugin.getFieldValue('advert_type');
        switch (type) {
          case '2123605':
          case '3161879':
            // offer
            path = locale === 'sk' ? 'aktivity/ponuka' : 'aktivity/nabidka';
            break;
          case '2123606':
          case '3161876':
            // inquiry
            path = locale === 'sk' ? 'aktivity/dopyt' : 'aktivity/poptavka';
            break;
          default:
            break;
        }
        window.open(`${baseUrl}/${path}/${slug}`);
        break;
      }

      case '?':
      case '197903': {
        path = locale === 'sk' ? 'clanky-a-galeria' : 'clanky-a-galerie';
        const suffix = locale === 'sk' ? 'nahlad' : 'nahled';
        window.open(`${baseUrl}/${path}/${slug}/${suffix}`);
        break;
      }

      default:
        break;
    }
    e.preventDefault();
    return false;
  };
  button.textContent = 'Zobrazit náhled';
  container.appendChild(button);

  document.body.appendChild(container);
});
