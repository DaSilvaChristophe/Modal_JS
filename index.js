const modalButton = document.querySelector("[data-toggle=modal]");

modalButton.addEventListener('click', function(e){
    e.preventDefault();
    let target = this.dataset.target

    let modal = document.querySelector(target)

    modal.classList.add("show");

    const modalCloses = document.querySelectorAll("[data-dismiss=dialog]");

    for (let close of modalCloses){

        close.addEventListener('click', function(){
            modal.classList.remove("show");
        })
    }

    modal.addEventListener('click', function(e){
        this.classList.remove("show");
    });

    modal.children[0].addEventListener('click', function(e){
        e.stopPropagation();
    })
})