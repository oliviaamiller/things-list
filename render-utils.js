export function renderCakeCard(cake) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const p = document.createElement('p');

    div.classList.add('cake-cards');
    a.classList.add('cake-links');

    p.textContent = cake.name;
    a.href = `./details/?id=${cake.id}`;

    div.append(p);
    a.append(div);

    return a;
}

export function renderCakeDetail(cake) {
    const div = document.createElement('div');
    const infoDiv = document.createElement('div');
    const img = document.createElement('img');
    const nameEl = document.createElement('p');
    const flavorEl = document.createElement('p');
    const icingEl = document.createElement('p');
    const decorationEl = document.createElement('p');
    
    div.classList.add('cake-detail');
    infoDiv.classList.add('cake-info');

    nameEl.textContent = cake.name;
    nameEl.classList.add('cake-name');

    flavorEl.textContent = `flavor: ${cake.flavor}`;

    icingEl.textContent = `icing: ${cake.icing}`;

    decorationEl.textContent = `decoration: ${cake.icing}`;

    img.src = `../assets/${cake.name}.jpeg`;

    infoDiv.append(nameEl, flavorEl, icingEl, decorationEl);

    div.append(img, infoDiv);
    
    return div;
}