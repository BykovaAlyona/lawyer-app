export default function AddAnimations() {
    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('show-element');
            }
        });
    }

    let options = {
        threshold: [0.2]
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('#card,  #resume,  #description,  #guarantees,  #consultation');

    for (let elm of elements) {
        observer.observe(elm);
    }
}