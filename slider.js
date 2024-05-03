<script>
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach(item, i) = {
    let  = item.getBoundingClientRect()}
    containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () = {
        item.scrollLeft += containerWidth
    })

    preBtn[i].addEventListener('click', () = {
        item.scrollLeft -= containerWidth
    }
)

</script>