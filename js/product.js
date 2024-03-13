/*input de registracion*/
const fondo = document.querySelector(".fondo");
const loginlink = document.querySelector(".login-link");
const registrarlink = document.querySelector(".registrar-link");
const btn = document.querySelector(".btn");
const iconocerrar = document.querySelector(".icono-cerrar");


registrarlink.addEventListener("click", () => {
    fondo.classList.add('active');
});

loginlink.addEventListener("click", () => {
    fondo.classList.remove('active');
});

btn.addEventListener("click", () => {
    fondo.classList.add('active-btn');
});

iconocerrar.addEventListener("click", () => {
    fondo.classList.remove('active-btn');
});



/*Arrays del carrito*/
const productos = [
    {
        id: 1,
        nombre: "televisor",
        precio: 1500,
        img:
           "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQeJFf4f5KPS2FRIWKQyQz-gVNZMclJFzo5tjv9qYCgN4hUSnD3Q0mMpZXEAHXe16_YBLUhRPxhK7pOhtroxmJQuSKM7wiKl_NF2IdWOUBMlKSU_l5j8eZixJ1hzvFGEBNeCQgB&usqp=CAc",
        cantidad: 1,   
    },
    {
        id: 2,
        nombre: "heladera",
        precio: 2000,
        img: 
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRRMnvGAj-xCPl_cNfL1vQRjJOsI03nUf5Vw2Kf7QAJ6rrWejkmGRYnxqIraKpmQTBLbyek_TdZL0tIN6RgRb4dKgNBYfGldU4XfImFpr56KM0jaq-Tb_I6IanQb5RBTEQ4XJ1JVm8&usqp=CAc",
        cantidad: 1, 

    },
    {
        id: 3,
        nombre: "microondas",
        precio: 2700,
        img: 
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRm-x7jQgL2SndTdFLo4CTvDYATQ1TqY55izBI2G7xC2BpAH0cbS_KZFI_5p5dEN6g2H5JEMf9QtstS4k8rbsRljJfK3ZKb8_0BOrnuXzb8su92mNvBa2p5XG52CiwmjU-swNTLuQ&usqp=CAc",
        cantidad: 1, 

    },
    {
        id: 4,
        nombre: "lavarropas",
        precio: 3750,
        img: 
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRSOxC-rB9xy9kDXBJvXYJWrnZgZena-DXPf2Nves1GHJrrnsDo_a_h2ofUa3NhU-O8lqSu_y5QqagfyzYPQBgjseS_P1SHFDW5rt4maoNiVwnq-jAqxyUQgH0YZN_yOrOIE5H-zA&usqp=CAc",
        cantidad: 1,

    },
    {
        id: 5,
        nombre: "cocina",
        precio: 2890,
        img: 
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSYc-2T7YpxJWFLvMUtnRu5lgwqZ2r9CQUTODgoZiLjdUBjWcWyVCglDNTnEFe2lhgDtvWPqpObu6ZNX9rs3zLob76DNygzABAt3Haz2x-P0YVjtLePMWbZ8YQGezWBc1C9yaUQ1A&usqp=CAc",
        cantidad: 1,

    },
    {
        id: 6,
        nombre: "minicomponente",
        precio: 3450,
        img: 
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR_-ywEZ4UNuBRtR2ZSInNhL9ev_UPR-xl1zGYRuQTMvP63xfSx4MH_uHevrrGKj92E9U8culqN6p-mwS-gLuP4-8tFMMHNbreW0QA5RIXMiOJ71pxNrJ-Pbc5HCR9hZERwXgnQ8Cg&usqp=CAc",
        cantidad: 1,

    },
];