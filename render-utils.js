export function renderCakeCard(cake) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const p = document.createElement('p');

    div.classList.add('cakes-list');

    p.textContent = cake.name;
    a.href = `./details/?id=${cake.id}`;

    div.append(p);
    a.append(div);

    return a;
}

export function renderCakeDetail(cake) {
    const div = document.createElement('div');
    const img = document.createElement('img');

}