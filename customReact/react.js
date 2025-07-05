const reactElement = {
    type: 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'Click to visit Google'
};
const root = document.getElementById('root');

function customRender(reactElement, root){
     const dom = document.createElement(reactElement.type)
     dom.innerHTML = reactElement.children;
     dom.setAttribute('href', reactElement.props.href);
     dom.setAttribute('target', reactElement.props.target)
     root.appendChild(dom)
}
customRender(reactElement,root);

