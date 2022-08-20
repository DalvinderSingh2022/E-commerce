window.addEventListener("DOMContentLoaded", function () {

    //function on moreImages image click
    const moreImage = document.querySelectorAll("#preview .product-container .image-container");
    moreImage.forEach(function (image) {
        image.addEventListener("click", function (e) {
            const container = document.querySelector("#preview .category-container");
            displayImage = document.querySelector(".displayImage");
            image = e.currentTarget.querySelector("img");
            container.querySelector(".displayImage").setAttribute("src", image.getAttribute("src"));
        });
    });

    //function on profile button click
    const profileButton = document.querySelector("nav .profile");
    profileButton.addEventListener("click", function () {
        document.querySelector("#profile .fixed-container").style.display = ("flex");
    });

    //function on cart button click
    const cartButton = document.querySelector("nav .cart");
    cartButton.addEventListener("click", function (e) {
        document.querySelector("#cart .fixed-container").style.display = ("flex");
    });

    //function on x mark click
    const backButton = document.querySelectorAll(".fixed-container #back");
    backButton.forEach(function (button) {
        button.addEventListener("click", function (e) {
            button.parentNode.parentNode.style.display = ("none");
        })
    });

    //function for sign in
    var IsSignInned = false;
    const signButton = document.querySelector("#profile #signin");
    signButton.addEventListener("click", function () {
        const username = document.querySelector("#profile #username").value;
        const email = document.querySelector("#profile #email").value;
        const password = document.querySelector("#profile #password").value;
        if (username == "" || email == "" || password == "") {
            Alert("All fields are requred");
        } else {
            IsSignInned = true;
        };
    });

    //function to update last order if signed in
    const buyButton = document.querySelector("#cart button#buy");
    buyButton.addEventListener("click", function () {
        const username = document.querySelector("#profile #username").value;
        const email = document.querySelector("#profile #email").value;
        const password = document.querySelector("#profile #password").value;

        Alert("Order placed successfully");

        setTimeout(function () {
            document.querySelector("#cart .cart-container").innerHTML = "";

            document.querySelector("#cart #totalprice .total").innerHTML = "₹" + " " + "00";
            document.querySelector("#cart #totalprice .delivery").innerHTML = "₹" + " " + "00";
            document.querySelector("#cart #totalprice .totalpay").innerHTML = "₹" + " " + "00";

            totalPrice = 0;

            if (IsSignInned === true) {
                document.querySelector("#profile .total").innerHTML = document.querySelector("#cart .total").innerHTML;
                document.querySelector("#profile .delivery").innerHTML = document.querySelector("#cart .delivery").innerHTML;
                document.querySelector("#profile .totalpay").innerHTML = document.querySelector("#cart .totalpay").innerHTML;
                document.querySelector("#profile .date").innerHTML = new Date().getDate() + " - " + (new Date().getMonth() + 1) + " - " + new Date().getFullYear();
                Alert("Last order details updated");
            } else {
                Alert("Sign in to save last order details");
            };

        }, 3000);
    });

    //function to remove all product from cart
    const removeAllButton = document.querySelector("#cart .detail-container #remove");
    removeAllButton.addEventListener("click", function () {
        document.querySelector("#cart .cart-container").innerHTML = "";

        document.querySelector("#cart #totalprice .total").innerHTML = "₹" + " " + "00";
        document.querySelector("#cart #totalprice .delivery").innerHTML = "₹" + " " + "00";
        document.querySelector("#cart #totalprice .totalpay").innerHTML = "₹" + " " + "00";

        totalPrice = 0;
        Alert("All products removed from cart");
    });


    //function on addtocart button click
    const addTocartButton = document.querySelectorAll("#preview .detail-container #addtocart");
    addTocartButton.forEach(function (div) {
        div.addEventListener("click", function (e) {
            const product = e.currentTarget.parentNode.parentNode.parentNode;
            const cartDetail = {
                image: product.querySelector(".image1").getAttribute("src"),
                price: product.querySelector(".price").innerHTML,
                brandTitle: product.querySelector(".brand-title").innerHTML,
                quantity: product.querySelector(".quantity-count").value,
            };
            document.querySelector("#cart .cart-container").innerHTML += `
              <div class="flex-container">
                <div class="image-container" style="flex: 1;">
                    <img src="${cartDetail.image}" ">
                </div>
                <div class="detail-container" style="flex: 2;">
                    <div>
                        <div class="brand-title">${cartDetail.brandTitle}</div>
                    </div>
                    <div>
                        <div class="price">${"Price" + ": " + cartDetail.price}</div>
                    </div>
                    <div>
                        <div class="quantity">${"Quantity" + ": " + cartDetail.quantity} </div>
                    </div>
                    <div>
                        <button class="remove">Remove</button>
                    </div>
                </div>
            </div>`;
            //for function to remove single product function  
            const removeButton = document.querySelectorAll("#cart .cart-container .remove");

            removeProduct(removeButton);
            updateTotal();
            Alert("Product added to cart");
        });
    });

    //function for menu button for responsive nav
    const Menubutton = document.querySelector("nav .menu-button");
    Menubutton.addEventListener("click", function(){
        const Nav = document.querySelector("nav");
        Nav.classList.toggle("active");
    });

    changeBanner();

    productCreator(document.querySelectorAll("#mobile .product-container"), Mobile);
    productCreator(document.querySelectorAll("#fashion .product-container"), Fashion);
    productCreator(document.querySelectorAll("#electronics .product-container"), Electronics);
});

const Mobile = [
    [
        {
            Price: 23998,
            Rating: 5,
            Brand: "MI",
            Title: "Mi 10i (6 GB RAM)",
            Image1: "https://rukminim1.flixcart.com/image/416/416/kjrh2fk0/mobile/h/f/p/10i-m2007j17i-mi-original-imafz9bbg2gesefa.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/kjrh2fk0/mobile/3/t/h/10i-m2007j17i-mi-original-imafz9bbzvezyhj7.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/kjlrb0w0-0/mobile/s/s/s/10i-m10ix09-mi-original-imafz4zyxafahfcd.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/kjrh2fk0/mobile/a/r/4/10i-m2007j17i-mi-original-imafz9bb357hqxzf.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/kjrh2fk0/mobile/e/5/b/10i-m2007j17i-mi-original-imafz9bbnhtcxjng.jpeg?q=70",
        },
        {
            Price: 7159,
            Rating: 5,
            Brand: "Redmi",
            Title: "Redmi 9A (2 GB RAM)",
            Image1: "https://rukminim1.flixcart.com/image/416/416/kesv0y80/mobile/w/g/r/mi-redmi-9a-b08696xb4b-original-imafve7pjpemhwk5.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/kesv0y80/mobile/w/g/r/mi-redmi-9a-b08696xb4b-original-imafve7pqgx46v9s.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/kesv0y80/mobile/w/g/r/mi-redmi-9a-b08696xb4b-original-imafve7pqafngxgc.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/kesv0y80/mobile/w/g/r/mi-redmi-9a-b08696xb4b-original-imafve7phgtxysqh.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/kesv0y80/mobile/w/g/r/mi-redmi-9a-b08696xb4b-original-imafve7p2xufgzkk.jpeg?q=70",
        },
        {
            Price: 13850,
            Rating: 5,
            Brand: "Redmi",
            Title: "Redmi Note 9",
            Image1: "https://rukminim1.flixcart.com/image/416/416/k7usyvk0/mobile/k/n/u/mi-redmi-note-9-b0784d7nfq-original-imafqy27p5tuzx77.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/k7usyvk0/mobile/k/n/u/mi-redmi-note-9-b0784d7nfq-original-imafqy276nfzq6sg.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/k7usyvk0/mobile/k/n/u/mi-redmi-note-9-b0784d7nfq-original-imafqy27hjvjmfgg.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/k7w8eq80/mobile/k/n/u/mi-redmi-note-9-pro-b0784d7nfq-original-imafqf9gvm4qhy7x.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/k7w8eq80/mobile/k/n/u/mi-redmi-note-9-pro-b0784d7nfq-original-imafqf9gyw6wyyne.jpeg?q=70",
        },
        {
            Price: 8999,
            Rating: 5,
            Brand: "Redmi",
            Title: "Redmi Note",
            Image1: "https://rukminim1.flixcart.com/image/416/416/k6tniq80/mobile/v/z/j/mi-redmi-8a-dual-b07x1ktaa-original-imafp73gqsrtspkk.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/kevpwnk0/mobile/q/f/y/mi-redmi-8a-dual-mzb8953in-original-imafvgwyghbcntdt.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/k6tniq80/mobile/v/z/j/mi-redmi-8a-dual-b07x1ktaa-original-imafp73ghtp6jshc.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/ktbu6q80/mobile/z/3/p/8a-dual-3gb-64gb-8a-dual-3gb-64gb-redmi-original-imafp73gzfpwjb6e.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/k6v2ykw0/mobile/v/z/j/mi-redmi-8a-dual-b07x1ktaa-original-imafp82jaw9uxnzc.jpeg?q=70"
        },
        {
            Price: 22990,
            Rating: 5,
            Brand: "Xiaomi",
            Title: "Xiaomi 11Lite NE (6 GB RAM)",
            Image1: "https://rukminim1.flixcart.com/image/416/416/kua4r680/mobile/n/1/g/11lite5g-11-lite-ne-5g-redmi-original-imag7f6chqmz5hzd.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/kua4r680/mobile/a/h/v/11lite5g-11-lite-ne-5g-redmi-original-imag7f6cuftjgqb4.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/kumzpu80/mobile/a/i/7/11lite-ne-2109119di-redmi-original-imag7pztep5bcyhj.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/kumzpu80/mobile/o/7/a/11lite-ne-2109119di-redmi-original-imag7pztbjkkvqd9.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/kua4r680/mobile/8/7/g/11lite5g-11-lite-ne-5g-redmi-original-imag7f6cwfem3vza.jpeg?q=70",
        },
    ],

    [
        {
            Price: 20999,
            Rating: 5,
            Brand: "vivo",
            Title: "vivo Y75",
            Image1: "https://rukminim1.flixcart.com/image/416/416/l3dcl8w0/mobile/2/x/b/-original-imagehyfbsxwzphy.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/l3dcl8w0/mobile/x/i/x/-original-imagehyfvcaajwvb.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/l3dcl8w0/mobile/f/x/e/-original-imagehyfabkhedsq.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/l3dcl8w0/mobile/2/w/9/-original-imagehyfwswnvhtu.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/l3dcl8w0/mobile/i/m/e/-original-imagehyfxuc2ygnu.jpeg?q=70",
        },
        {
            Price: 79999,
            Rating: 5,
            Brand: "vivo",
            Title: "vivo X80 Pro",
            Image1: "https://rukminim1.flixcart.com/image/416/416/l3929ow0/mobile/v/n/s/-original-imageewzeguggzvc.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/l3929ow0/mobile/s/h/f/-original-imageewzyb7fuyzf.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/l3929ow0/mobile/w/9/f/-original-imageewzmahjjutb.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/l3929ow0/mobile/z/n/t/-original-imageewz5dud7bez.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/l3929ow0/mobile/t/f/n/-original-imageewzefbwkvqw.jpeg?q=70",
        },
        {
            Price: 24999,
            Rating: 5,
            Brand: "vivo",
            Title: "vivo T1 Pro 5G",
            Image1: "https://rukminim1.flixcart.com/image/416/416/l2p23rk0/mobile/o/v/b/-original-imagdznj6xgmgh8a.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/l2p23rk0/mobile/d/3/t/-original-imagdznjqq3w3dey.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/l2p23rk0/mobile/h/m/c/-original-imagdznjhnrh7yyn.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/l2p23rk0/mobile/0/3/v/-original-imagdznjy4trhp5r.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/l2p23rk0/mobile/c/w/c/-original-imagdznjtubakyzj.jpeg?q=70",
        },
        {
            Price: 17999,
            Rating: 5,
            Brand: "vivo",
            Title: "vivo T1 44W",
            Image1: "https://rukminim1.flixcart.com/image/416/416/l2p23rk0/mobile/x/b/y/-original-imagdznhnzmzfbwx.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/l2p23rk0/mobile/p/x/e/-original-imagdznh3enpuwwx.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/l2p23rk0/mobile/0/c/s/-original-imagdznh5qbarzwq.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/l2p23rk0/mobile/4/u/k/-original-imagdznhz5drxgem.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/l2p23rk0/mobile/5/i/u/-original-imagdznhd5x4kttu.jpeg?q=70",
        },
        {
            Price: 21990,
            Rating: 5,
            Brand: "vivo",
            Title: "vivo Y75 5G",
            Image1: "https://rukminim1.flixcart.com/image/416/416/l26hdow0/mobile/f/o/i/-original-imagdh6nzfjqtcxj.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/l26hdow0/mobile/u/i/u/-original-imagdh6ngyen44uc.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/l26hdow0/mobile/e/c/o/-original-imagdh6nctxbbdwf.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/l26hdow0/mobile/i/5/m/-original-imagdh6ny6hfzdq9.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/l26hdow0/mobile/j/w/3/-original-imagdh6ng9b6q4kd.jpeg?q=70",
        },

    ],

    [
        {
            Price: 7490,
            Rating: 5,
            Brand: "OPPO",
            Title: "OPPO A11K",
            Image1: "https://rukminim1.flixcart.com/image/416/416/kbs9k7k0/mobile/s/k/2/oppo-a11k-cph2083-original-imaft25bhg9f3k2f.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/kbs9k7k0/mobile/s/k/2/oppo-a11k-cph2083-original-imaft25bcwmyqkwd.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/kbs9k7k0/mobile/s/k/2/oppo-a11k-cph2083-original-imaft25bzpjgxftc.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/kbs9k7k0/mobile/s/k/2/oppo-a11k-cph2083-original-imaft25bygzxmcsz.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/kbs9k7k0/mobile/s/k/2/oppo-a11k-cph2083-original-imaft25bztergdhf.jpeg?q=70",
        },
        {
            Price: 9990,
            Rating: 5,
            Brand: "OPPO",
            Title: "OPPO A16E",
            Image1: "https://rukminim1.flixcart.com/image/416/416/l12h1u80/mobile/h/m/8/-original-imagcq2qpgx6nhet.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/l12h1u80/mobile/j/e/f/-original-imagcq2qwfqfudzf.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/l12h1u80/mobile/t/r/0/-original-imagcq2qxzugzcwt.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/l12h1u80/mobile/v/g/i/-original-imagcq2qd4h2b8gb.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/l12h1u80/mobile/e/0/h/-original-imagcq2qkerkkrvm.jpeg?q=70",
        },
        {
            Price: 9490,
            Rating: 5,
            Brand: "OPPO",
            Title: "OPPO A12",
            Image1: "https://rukminim1.flixcart.com/image/416/416/kb1470w0/mobile/6/r/s/oppo-a12-cph2083-original-imafsh2hvz4f2sa5.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/kb1470w0/mobile/6/r/s/oppo-a12-cph2083-original-imafsh2ht4hgejqc.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/kb1470w0/mobile/6/r/s/oppo-a12-cph2083-original-imafsh2htsaksdj7.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/kb1470w0/mobile/6/r/s/oppo-a12-cph2083-original-imafsh2hsfdwzqj5.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/kb1470w0/mobile/6/r/s/oppo-a12-cph2083-original-imafsh2hcg4fxjbz.jpeg?q=70",
        },
        {
            Price: 9400,
            Rating: 5,
            Brand: "OPPO",
            Title: "OPPO A16k",
            Image1: "https://rukminim1.flixcart.com/image/416/416/kyg5zm80/mobile/b/g/t/-original-imagazh63wbgwcxw.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/kyg5zm80/mobile/n/5/t/-original-imagazh65y5fvcqp.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/kyg5zm80/mobile/h/b/b/-original-imagazh6vcg2y8vh.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/kyg5zm80/mobile/d/c/3/-original-imagazh6hzhchzjw.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/kyg5zm80/mobile/n/q/w/-original-imagazh6cbhtdqvh.jpeg?q=70",
        },
        {
            Price: 9299,
            Rating: 5,
            Brand: "OPPO",
            Title: "OPPO A11K",
            Image1: "https://rukminim1.flixcart.com/image/416/416/kbs9k7k0/mobile/z/6/g/oppo-a11k-cph2083-original-imaft25bzadyfstj.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/kbs9k7k0/mobile/z/6/g/oppo-a11k-cph2083-original-imaft25bh44gzs5g.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/kbs9k7k0/mobile/z/6/g/oppo-a11k-cph2083-original-imaft25bkrfmmtyx.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/kbs9k7k0/mobile/z/6/g/oppo-a11k-cph2083-original-imaft25bfhukhfce.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/kbs9k7k0/mobile/z/6/g/oppo-a11k-cph2083-original-imaft25becyndpbz.jpeg?q=70",
        },
    ],

    [
        {
            Price: 16399,
            Rating: 5,
            Brand: "Samsung",
            Title: "SAMSUNG Galaxy M33 5G",
            Image1: "https://rukminim1.flixcart.com/image/416/416/l3j2cnk0/mobile/u/m/z/galaxy-m33-5g-sm-m336bzgpins-samsung-original-imagemq4hk726gry.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/l3j2cnk0/mobile/0/p/d/galaxy-m33-5g-sm-m336bzgpins-samsung-original-imagemq484tudfh3.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/l3j2cnk0/mobile/g/p/a/galaxy-m33-5g-sm-m336bzgpins-samsung-original-imagemq4bedhgwhu.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/l3khsi80/mobile/e/v/o/galaxy-m33-5g-sm-m336bznpins-sm-336bu-ds-samsung-original-imagenhrdtyqrpyr.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/l3j2cnk0/mobile/f/4/z/galaxy-m33-5g-sm-m336bzgpins-samsung-original-imagemq4f2fpea7n.jpeg?q=70",
        },
        {
            Price: 34278,
            Rating: 5,
            Brand: "Samsung",
            Title: "SAMSUNG S20 FE 5G",
            Image1: "https://rukminim1.flixcart.com/image/416/416/l27wtjk0/mobile/u/s/c/s20-fe-5g-sm-g781b-ds-samsung-original-imagdhz9pnvnzuvr.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/l27wtjk0/mobile/1/w/o/s20-fe-5g-sm-g781b-ds-samsung-original-imagdhz9dhmbspeh.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/l27wtjk0/mobile/f/p/y/s20-fe-5g-sm-g781b-ds-samsung-original-imagdhz9bnhebtrr.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/l27wtjk0/mobile/w/q/x/s20-fe-5g-sm-g781b-ds-samsung-original-imagdhz9hcmjh3z4.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/l2dmky80/mobile/y/q/9/s20-fe-5g-sm-g781b-ds-samsung-original-imagdqebqwrv8nt7.jpeg?q=70",
        },
        {
            Price: 32440,
            Rating: 5,
            Brand: "Samsung",
            Title: "SAMSUNG Galaxy A33",
            Image1: "https://rukminim1.flixcart.com/image/416/416/l3xcr680/mobile/q/6/v/-original-imagexfy6u2f6h3f.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/l1l1rww0/mobile/a/g/m/-original-imagd4dep4mppfmk.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/l1l1rww0/mobile/t/t/r/-original-imagd4decdzfmn9w.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/l1l1rww0/mobile/m/v/l/-original-imagd4dehbzejfkp.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/l1l1rww0/mobile/4/w/c/-original-imagd4debjjnqfsw.jpeg?q=70",
        },
        {
            Price: 41999,
            Rating: 5,
            Brand: "Samsung",
            Title: "SAMSUNG Galaxy A73 5G",
            Image1: "https://rukminim1.flixcart.com/image/416/416/l3xcr680/mobile/g/i/u/-original-imagexf3spjgyezy.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/l1dwknk0/mobile/l/2/q/-original-imagcyr2zr4swxhz.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/l1dwknk0/mobile/u/p/p/-original-imagcyr2cqgpv7ks.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/l1dwknk0/mobile/x/m/m/-original-imagcyr2hheupqeb.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/l3xcr680/mobile/o/n/1/-original-imagexf3ndbsuaez.jpeg?q=70",
        },
        {
            Price: 32990,
            Rating: 5,
            Brand: "Samsung",
            Title: "SAMSUNG Galaxy A33",
            Image1: "https://rukminim1.flixcart.com/image/416/416/l3xcr680/mobile/n/u/4/-original-imagexeyrcz5ckyy.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/l1l1rww0/mobile/e/v/h/-original-imagd4dehdwdp8hz.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/l1l1rww0/mobile/m/e/g/-original-imagd4de95nsrbxy.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/l1l1rww0/mobile/1/a/2/-original-imagd4denhr5zw5v.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/l1l1rww0/mobile/p/1/4/-original-imagd4dedbe9v6wy.jpeg?q=70",
        },
        {
            Price: 51990,
            Rating: 5,
            Brand: "Samsung",
            Title: "SAMSUNG Galaxy S21 FE 5G",
            Image1: "https://rukminim1.flixcart.com/image/416/416/kz7bcsw0/screen-guard/front-and-back-screen-guard/o/p/j/rr44-twenteesky-original-imagb9dh2hm4fzhw.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/l0vbukw0/mobile/w/9/t/galaxy-s21-fe-5g-sm-g990elgiinu-samsung-original-imagck5vs7k3ag5t.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/l0vbukw0/mobile/n/b/s/galaxy-s21-fe-5g-sm-g990elgiinu-samsung-original-imagck5vtt5hejbw.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/kzpw2vk0/mobile/h/n/5/galaxy-s21-fe-5g-lavender-8gb-128gb-storage-sm-g990elviinu-original-imagbnbdj2hmrbyq.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/kzpw2vk0/mobile/u/2/o/galaxy-s21-fe-5g-lavender-8gb-128gb-storage-sm-g990elviinu-original-imagbnbdagsvg8qu.jpeg?q=70",
        },
        {
            Price: 13999,
            Rating: 5,
            Brand: "Samsung",
            Title: "SAMSUNG Galaxy A13",
            Image1: "https://rukminim1.flixcart.com/image/416/416/l19m93k0/mobile/w/g/x/-original-imagcv74zmfuu3cx.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/l19m93k0/mobile/m/k/g/-original-imagcv74pc4up88m.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/l19m93k0/mobile/2/q/p/-original-imagcv74fta8kq3y.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/l19m93k0/mobile/d/v/f/-original-imagcv74gzhdatrz.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/l19m93k0/mobile/a/k/z/-original-imagcv747zahmgvy.jpeg?q=70",
        },
        {
            Price: 4649,
            Rating: 5,
            Brand: "Samsung",
            Title: "SAMSUNG Galaxy F13",
            Image1: "https://rukminim1.flixcart.com/image/416/416/l4n2oi80/mobile/r/6/t/-original-imagfhu6dcpdnqkh.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/l4n2oi80/mobile/b/o/a/-original-imagfhu6nsnwvxkm.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/l4n2oi80/mobile/w/w/i/-original-imagfhu6ugf9ccfn.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/l4n2oi80/mobile/a/l/h/-original-imagfhu6mxpwxda4.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/l4n2oi80/mobile/7/u/8/-original-imagfhu6fqzhwcj7.jpeg?q=70",
        },
        {
            Price: 7499,
            Rating: 5,
            Brand: "Samsung",
            Title: "SAMSUNG Galaxy A03 Core",
            Image1: "https://rukminim1.flixcart.com/image/416/416/kwqq1zk0/mobile/j/0/f/-original-imag9cm79ubcv4bd.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/kwqq1zk0/mobile/f/o/j/-original-imag9cm7cgszbs2u.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/kwqq1zk0/mobile/n/q/d/-original-imag9cm7ud36amdu.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/kwqq1zk0/mobile/b/r/z/-original-imag9cm5jryjayuf.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/kwqq1zk0/mobile/g/b/o/-original-imag9cm5xsfbpgyu.jpeg?q=70",
        },
        {
            Price: 13999,
            Rating: 5,
            Brand: "Samsung",
            Title: "CH2927I",
            Image1: "https://rukminim1.flixcart.com/image/416/416/l0sgyvk0/mobile/f/v/c/-original-imagcg22pf79cgau.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/l0fm07k0/mobile/s/6/k/-original-imagc829byq5zca2.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/l0fm07k0/mobile/f/u/m/-original-imagc8292hafppgg.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/l0fm07k0/mobile/t/g/0/-original-imagc829crwhdhbk.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/l0fm07k0/mobile/5/j/u/-original-imagc829ghpqhxgp.jpeg?q=70",
        },
    ],

    [
        {
            Price: 42999,
            Rating: 5,
            Brand: "Realme",
            Title: "realme GT Neo 3 (Thor Limited Edition)",
            Image1: "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/t/y/h/-original-imaggbute6nxewjr.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/r/m/7/-original-imaggbutegwrmwg9.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/g/1/q/-original-imaggbutarf7jkpg.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/u/e/0/-original-imaggg2vussk6x8g.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/v/o/d/-original-imaggbutarqnfwff.jpeg?q=70",
        },
        {
            Price: 4649,
            Rating: 5,
            Brand: "Realme",
            Title: "Realme C30",
            Image1: "https://rukminim1.flixcart.com/image/416/416/l4ln8nk0/mobile/f/6/a/-original-imagfggrbywzk8r6.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/l4ln8nk0/mobile/e/r/y/-original-imagfggrjjrvbnr4.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/l4ln8nk0/mobile/i/d/y/-original-imagfggrfzuzzuru.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/l4ln8nk0/mobile/c/j/v/-original-imagfggrw3hgtwyv.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/l4ln8nk0/mobile/f/8/j/-original-imagfggrnqhtb6tt.jpeg?q=70",
        },
        {
            Price: 144499,
            Rating: 5,
            Brand: "Realme",
            Title: "Realme Narzo 50",
            Image1: "https://rukminim1.flixcart.com/image/416/416/l0bbonk0/shopsy-mobile/p/k/x/-original-imagc4qj5ejywxnv.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/l0bbonk0/shopsy-mobile/i/w/y/-original-imagc4qjujzwc6x7.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/l0bbonk0/shopsy-mobile/4/p/f/-original-imagc4qjk7z9cdf5.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/l0bbonk0/shopsy-mobile/5/p/c/-original-imagc4qj8qdxc34z.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/l0bbonk0/shopsy-mobile/z/f/v/-original-imagc4qjeumkzmm4.jpeg?q=70",
        },
        {
            Price: 15999,
            Rating: 5,
            Brand: "Realme",
            Title: "realme 9 5G",
            Image1: "https://rukminim1.flixcart.com/image/416/416/l4fxh8w0/mobile/l/l/4/-original-imagfc56zazhvbfq.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/l4fxh8w0/mobile/l/5/x/-original-imagfc56hdjswdhm.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/l4fxh8w0/mobile/y/o/x/-original-imagfc56mzfynygk.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/l4fxh8w0/mobile/m/d/c/-original-imagfc56xfdc2zhs.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/l4fxh8w0/mobile/z/m/y/-original-imagfc56dwkccbxb.jpeg?q=70",
        },
        {
            Price: 34999,
            Rating: 5,
            Brand: "Realme",
            Title: "realme 9 5G",
            Image1: "https://rukminim1.flixcart.com/image/416/416/l3rmzrk0/mobile/2/l/k/-original-imagetmebhg9thpv.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/l27wtjk0/mobile/4/k/n/-original-imagdm3thzm4gkat.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/l27wtjk0/mobile/w/c/u/-original-imagdm3t7j5fuvsn.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/l27wtjk0/mobile/m/c/y/-original-imagdm3tcw8vgxfr.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/l27wtjk0/mobile/1/v/z/-original-imagdm3tage99brz.jpeg?q=70",
        },
    ],

    [
        {
            Price: 49999,
            Rating: 5,
            Brand: "Asus",
            Title: "ASUS ROG 5s",
            Image1: "https://rukminim1.flixcart.com/image/416/416/ky7lci80/mobile/t/x/j/-original-imagahvge92r5fmm.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/ky7lci80/mobile/4/f/b/-original-imagahvgf5gzt6sz.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/ky7lci80/mobile/o/2/m/-original-imagahvgsrjbjfzb.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/ky7lci80/mobile/d/i/1/-original-imagahvgsbhqjqaf.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/ky7lci80/mobile/p/a/b/-original-imagahvgjaeecya5.jpeg?q=70",
        },
        {
            Price: 49999,
            Rating: 5,
            Brand: "Asus",
            Title: "ASUS ROG Phone 3",
            Image1: "https://rukminim1.flixcart.com/image/416/416/kcuug7k0/mobile/g/h/e/asus-rog-phone-3-zs661ks-6a006in-original-imaftwc6nmyuyekd.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/kcuug7k0/mobile/g/h/e/asus-rog-phone-3-zs661ks-6a006in-original-imaftwc6gzvthxsb.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/kckud8w0/mobile/g/h/e/asus-rog-phone-3-zs661ks-6a006in-original-imaftz8b4aur8w55.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/kckud8w0/mobile/g/h/e/asus-rog-phone-3-zs661ks-6a006in-original-imaftz8bqrknscw8.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/kcuug7k0/mobile/g/h/e/asus-rog-phone-3-zs661ks-6a006in-original-imaftwc6qugdfugn.jpeg?q=70",
        },
        {
            Price: 40999,
            Rating: 5,
            Brand: "Asus",
            Title: "ASUS ROG Phone II",
            Image1: "https://rukminim1.flixcart.com/image/416/416/k6fd47k0/mobile/z/g/r/asus-rog-phone-ii-zs660kl-1a017in-original-imafkkbmyuv5vygg.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/k0vbgy80/mobile/z/g/r/asus-rog-phone-ii-zs660kl-1a017in-original-imafkkbm4mtrar7j.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/k0vbgy80/mobile/z/g/r/asus-rog-phone-ii-zs660kl-1a017in-original-imafkkbmcj2uzms5.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/k0vbgy80/mobile/z/g/r/asus-rog-phone-ii-zs660kl-1a017in-original-imafkkbmnfz76pnh.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/k0vbgy80/mobile/z/g/r/asus-rog-phone-ii-zs660kl-1a017in-original-imafkkbmz7dmxm59.jpeg?q=70",
        },
        {
            Price: 35999,
            Rating: 5,
            Brand: "Asus",
            Title: "ASUS 6Z",
            Image1: "https://rukminim1.flixcart.com/image/416/416/jx0prbk0/mobile/y/t/v/asus-6z-zs630kl-2a014ww-original-imafhkqythzfmjp8.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/jx0prbk0/mobile/y/t/v/asus-6z-zs630kl-2a014ww-original-imafhkqyz8uacwgq.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/jx0prbk0/mobile/y/t/v/asus-6z-zs630kl-2a014ww-original-imafhkqyq474a8xd.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/jx0prbk0/mobile/y/t/v/asus-6z-zs630kl-2a014ww-original-imafhkqyv7kztcgg.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/jx0prbk0/mobile/y/t/v/asus-6z-zs630kl-2a014ww-original-imafhkqysynxhgbw.jpeg?q=70",
        },
        {
            Price: 14999,
            Rating: 5,
            Brand: "Asus",
            Title: "ASUS ZenFone Max M2",
            Image1: "https://rukminim1.flixcart.com/image/416/416/jp02t8w0/mobile/z/z/e/asus-zenfone-max-m2-zb632kl-4a004in-original-imafbcafmv6tgqjz.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/jpinjbk0/mobile/z/z/e/asus-zenfone-max-m2-zb632kl-4a004in-original-imafbqg8adb3vqqb.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/jp02t8w0/mobile/z/z/e/asus-zenfone-max-m2-zb632kl-4a004in-original-imafbcafsrngfh28.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/jp02t8w0/mobile/z/z/e/asus-zenfone-max-m2-zb632kl-4a004in-original-imafbcafhnd8ymnb.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/jp02t8w0/mobile/z/z/e/asus-zenfone-max-m2-zb632kl-4a004in-original-imafbcafwh3feftp.jpeg?q=70",
        },
    ],
];

const Fashion = [
    [
        {
            Price: 749,
            Rating: 3,
            Brand: "PETER ENGLAND",
            Title: "Men Slim Fit Solid Mandarin Collar Casual Shirt",
            Image1: "https://rukminim1.flixcart.com/image/832/832/kwv0djk0/shirt/b/q/s/-original-imag9ft3uf6qfwb3.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/kwv0djk0/shirt/t/2/x/-original-imag9ft3vshgmrt6.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/kwv0djk0/shirt/w/2/a/-original-imag9ft3xddzgufq.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/kwv0djk0/shirt/r/n/9/-original-imag9ft3gsmdv9wg.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/kwv0djk0/shirt/o/t/n/-original-imag9ft3kegt4zuk.jpeg?q=70",
        },
        {
            Price: 714,
            Rating: 3,
            Brand: "PETER ENGLAND",
            Title: "Men Super Slim Fit Solid Casual Shirt",
            Image1: "https://rukminim1.flixcart.com/image/832/832/kxgfzbk0/shirt/b/1/2/39-pjsfpsspj20150-peter-england-original-imag9wpfka2grbz2.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/kxgfzbk0/shirt/y/3/d/39-pjsfpsspj20150-peter-england-original-imag9wpfqk3fgys3.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/kxgfzbk0/shirt/x/d/4/39-pjsfpsspj20150-peter-england-original-imag9wpfcb4fe8bz.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/kxgfzbk0/shirt/t/z/m/44-pjsfpsspj20150-peter-england-original-imag9wpfbnkn38cs.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/kxgfzbk0/shirt/a/s/g/39-pjsfpsspj20150-peter-england-original-imag9wpfykrf6egw.jpeg?q=70",
        },
        {
            Price: 674,
            Rating: 3,
            Brand: "PETER ENGLAND",
            Title: "Men Super Slim Fit Printed Casual Shirt",
            Image1: "https://rukminim1.flixcart.com/image/832/832/kvsfhjk0/shirt/7/5/d/40-pjsfpsspa98909-peter-england-original-imag8m4d4zwnyrv7.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/kvsfhjk0/shirt/h/5/u/40-pjsfpsspa98909-peter-england-original-imag8m4dhh52fmgt.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/kvsfhjk0/shirt/x/5/v/40-pjsfpsspa98909-peter-england-original-imag8m4d5zkgrtgk.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/kvsfhjk0/shirt/m/e/9/40-pjsfpsspa98909-peter-england-original-imag8m4dpgre5zjw.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/kvsfhjk0/shirt/3/2/t/40-pjsfpsspa98909-peter-england-original-imag8m4dbnwd5yfh.jpeg?q=70",
        },
        {
            Price: 714,
            Rating: 4,
            Brand: "PETER ENGLAND",
            Title: "Men Slim Fit Printed Casual Shirt",
            Image1: "https://rukminim1.flixcart.com/image/832/832/kylvr0w0/shirt/u/z/h/40-pcsfsslfe16555-peter-england-original-imagaszm3aghsjuf.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/kylvr0w0/shirt/b/t/7/40-pcsfsslfe16555-peter-england-original-imagaszmnkxyv3bj.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/kylvr0w0/shirt/f/3/z/40-pcsfsslfe16555-peter-england-original-imagaszm8fyekf7s.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/kylvr0w0/shirt/p/d/v/40-pcsfsslfe16555-peter-england-original-imagaszmpfynjctr.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/kylvr0w0/shirt/k/m/d/40-pcsfsslfe16555-peter-england-original-imagaszmqzvfey5g.jpeg?q=70",
        },
        {
            Price: 899,
            Rating: 5,
            Brand: "PETER ENGLAND",
            Title: "Skinny",
            Image1: "https://rukminim1.flixcart.com/image/832/832/l3uhvgw0/shirt/5/b/n/40-pcshsslp516951-peter-england-original-imagevj4whvaybvk.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/l3vxbbk0/shirt/r/x/s/-original-imagewkyvthffygs.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/l3vxbbk0/shirt/b/q/b/-original-imagewkynukztfrd.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/l3vxbbk0/shirt/p/r/m/-original-imagewkya2vtx74j.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/l3vxbbk0/shirt/9/u/o/-original-imagewkywm5y7hy6.jpeg?q=70",
        },
        {
            Price: 919,
            Rating: 5,
            Brand: "PETER ENGLAND",
            Title: "Men Slim Fit Checkered Casual Shirt",
            Image1: "https://rukminim1.flixcart.com/image/832/832/kwv0djk0/shirt/h/m/p/-original-imag9ft3beczcwxq.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/kwv0djk0/shirt/t/j/g/-original-imag9ft3smzq6tm7.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/kwv0djk0/shirt/f/0/3/-original-imag9ft3zr7dygtb.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/kwv0djk0/shirt/g/e/h/-original-imag9ft32869dhvm.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/kwv0djk0/shirt/b/8/a/-original-imag9ft3kydzuazy.jpeg?q=70",
        },
        {
            Price: 899,
            Rating: 5,
            Brand: "PETER ENGLAND",
            Title: "Men Super Slim Fit Checkered Casual Shirt",
            Image1: "https://rukminim1.flixcart.com/image/832/832/kxxl9jk0/shirt/a/z/c/-original-imagaa4acnf4kkfx.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/kxxl9jk0/shirt/d/y/h/-original-imagaa4anyjyzzas.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/kxxl9jk0/shirt/2/m/l/-original-imagaa4ahqwbgsab.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/kxxl9jk0/shirt/u/k/x/-original-imagaa4aad8bgaha.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/kxxl9jk0/shirt/b/q/7/-original-imagaa4atfzrugux.jpeg?q=70",
        },
        {
            Price: 799,
            Rating: 5,
            Brand: "METRONAUT",
            Title: "Men Regular Fit Self Design Formal Shirt",
            Image1: "https://rukminim1.flixcart.com/image/832/832/kwv0djk0/shirt/p/y/l/-original-imag9ft3tuy5rqnk.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/kwv0djk0/shirt/e/4/j/-original-imag9ft3n8mupjhk.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/kwv0djk0/shirt/b/a/k/-original-imag9ft3cegcwbwm.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/kwv0djk0/shirt/v/z/v/-original-imag9ft3seb2jy6x.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/kwv0djk0/shirt/m/x/u/-original-imag9ft33rgdkczf.jpeg?q=70",
        },
        {
            Price: 476,
            Rating: 5,
            Brand: "ROASTER",
            Title: "Men Regular Fit Printed Casual Shirt",
            Image1: "https://rukminim1.flixcart.com/image/832/832/jvtujrk0/shirt/w/y/d/42-2283225-roadster-original-imafgmrhqehetkgv.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/jvtujrk0/shirt/w/y/d/42-2283225-roadster-original-imafgmrhjg9hspqx.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/jvtujrk0/shirt/w/y/d/44-2283225-roadster-original-imafgmrhwye2yyam.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/jvtujrk0/shirt/w/y/d/38-2283225-roadster-original-imafgmrhpa2h7srj.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/jvtujrk0/shirt/w/y/d/38-2283225-roadster-original-imafgmrhhzugaz6n.jpeg?q=70",
        },
    ],

    [
        {
            Price: 809,
            Rating: 4,
            Brand: "PETER ENGLAND",
            Title: "Slim Fit Men Dark Blue Cotton Blend Trousers",
            Image1: "https://rukminim1.flixcart.com/image/832/832/krtjgcw0/trouser/m/f/t/28-pctfsctpp28016-peter-england-original-imag5gxpzmcfmexc.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/krtjgcw0/trouser/v/y/4/28-pctfsctpp28016-peter-england-original-imag5gxpz8amaetq.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/krtjgcw0/trouser/l/2/a/28-pctfsctpp28016-peter-england-original-imag5gxprnwjhfrg.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/krtjgcw0/trouser/d/f/v/28-pctfsctpp28016-peter-england-original-imag5gxp2vyynnnk.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/krtjgcw0/trouser/r/g/m/28-pctfsctpp28016-peter-england-original-imag5gxpe8b8j8sv.jpeg?q=70",
        },
        {
            Price: 899,
            Rating: 5,
            Brand: "PETER ENGLAND",
            Title: "Slim Fit Men Black Polyester Viscose Blend Trousers",
            Image1: "https://rukminim1.flixcart.com/image/832/832/l30hmkw0/trouser/h/y/m/32-petfwnspo22553-peter-england-original-image83uyuhkau3j.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/l30hmkw0/trouser/y/g/n/32-petfwnspo22553-peter-england-original-image83ud9udkyde.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/l30hmkw0/trouser/t/u/o/32-petfwnspo22553-peter-england-original-image83u6yeqvpyc.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/l30hmkw0/trouser/g/d/e/32-petfwnspo22553-peter-england-original-image83uq5j7cbyv.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/l30hmkw0/trouser/c/p/c/32-petfwnspo22553-peter-england-original-image83uff5vyqdy.jpeg?q=70",
        },
        {
            Price: 899,
            Rating: 4,
            Brand: "PETER ENGLAND",
            Title: "Skinny Men Dark Blue Jeans",
            Image1: "https://rukminim1.flixcart.com/image/832/832/kuu4x3k0/jean/i/q/m/32-pjdnpskp835872-peter-england-original-imag7vmzdguyfyau.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/kuu4x3k0/jean/j/4/0/32-pjdnpskp835872-peter-england-original-imag7vmzuppay3vh.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/kuu4x3k0/jean/h/x/l/32-pjdnpskp835872-peter-england-original-imag7vmzrgp8cvsz.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/kuu4x3k0/jean/s/o/i/32-pjdnpskp835872-peter-england-original-imag7vmzz3ygkjfh.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/kuu4x3k0/jean/z/o/k/32-pjdnpskp835872-peter-england-original-imag7vmzzubqujbr.jpeg?q=70",
        },
        {
            Price: 899,
            Rating: 3,
            Brand: "PETER ENGLAND",
            Title: "Slim Men Dark Blue Jeans",
            Image1: "https://rukminim1.flixcart.com/image/832/832/kuu4x3k0/jean/c/f/a/30-pjdnpstf612900-peter-england-original-imag7vnf4wdakycy.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/kuu4x3k0/jean/4/b/r/30-pjdnpstf612900-peter-england-original-imag7vnfyr5mmccb.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/kuu4x3k0/jean/l/5/q/30-pjdnpstf612900-peter-england-original-imag7vnfkhqdrq2k.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/kuu4x3k0/jean/o/z/k/30-pjdnpstf612900-peter-england-original-imag7vnffzjwbyf3.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/kuu4x3k0/jean/x/k/b/30-pjdnpstf612900-peter-england-original-imag7vnfcrs3bxpv.jpeg?q=70",
        },
        {
            Price: 1169,
            Rating: 5,
            Brand: "PETER ENGLAND",
            Title: "Skinny Men Dark Blue Jeans",
            Image1: "https://rukminim1.flixcart.com/image/832/832/l3khsi80/jean/x/w/y/32-pjdnpskft09022-peter-england-original-imagenn5mfxrhn9b.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/l3khsi80/jean/2/b/j/32-pjdnpskft09022-peter-england-original-imagenn5veh4gher.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/l3khsi80/jean/m/5/v/32-pjdnpskft09022-peter-england-original-imagenn5smjsn98w.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/l3khsi80/jean/0/q/8/32-pjdnpskft09022-peter-england-original-imagenn5b4tekcqz.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/l3khsi80/jean/k/n/u/32-pjdnpskft09022-peter-england-original-imagenn5wrnywhyh.jpeg?q=70",
        },
        {
            Price: 679,
            Rating: 4,
            Brand: "PETER ENGLAND",
            Title: "Skinny Men Blue Jeans",
            Image1: "https://rukminim1.flixcart.com/image/832/832/kwfaj680/jean/8/i/c/-original-imag9467fzbpkauz.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/kwfaj680/jean/z/l/n/-original-imag94678xwktcps.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/kwfaj680/jean/m/h/3/-original-imag9467rdqmqzh2.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/kwfaj680/jean/i/g/o/-original-imag9467taecwk4u.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/kwfaj680/jean/t/d/b/-original-imag9467ktjjpy7x.jpeg?q=70",
        },
        {
            Price: 768,
            Rating: 4,
            Brand: "PETER ENGLAND",
            Title: "Slim Fit Men Dark Blue Pure Cotton Trousers",
            Image1: "https://rukminim1.flixcart.com/image/832/832/ke8uv0w0-0/trouser/f/w/k/30-11354674-roadster-original-imafuyzsvakae4gw.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/ke8uv0w0-0/trouser/n/4/z/32-11354674-roadster-original-imafuyztzncz6fsy.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/ke8uv0w0-0/trouser/m/l/r/30-11354674-roadster-original-imafuyzsdgv2uphf.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/ke8uv0w0-0/trouser/k/b/c/30-11354674-roadster-original-imafuyzrzv2tzbmy.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/ke8uv0w0-0/trouser/s/q/2/30-11354674-roadster-original-imafuyzsczfffpqf.jpeg?q=70",
        },
    ],

    [
        {
            Price: 3219,
            Rating: 5,
            Brand: "Calvin Klein Jeans",
            Title: "Printed Men Polo Neck Black T-Shirt",
            Image1: "https://rukminim1.flixcart.com/image/832/832/l0bbonk0/t-shirt/x/r/y/m-k10k108998beh-calvin-klein-jeans-original-imagc4rn2pbpkmhy.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/l0bbonk0/t-shirt/s/g/u/m-k10k108998beh-calvin-klein-jeans-original-imagc4rnh6uf96zk.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/l0bbonk0/t-shirt/s/s/l/m-k10k108998beh-calvin-klein-jeans-original-imagc4rngqppech8.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/l0bbonk0/t-shirt/q/3/8/m-k10k108998beh-calvin-klein-jeans-original-imagc4rnkqv6f3w7.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/l0bbonk0/t-shirt/t/n/k/m-k10k108998beh-calvin-klein-jeans-original-imagc4rnubaqfdyx.jpeg?q=70",
        },
        {
            Price: 879,
            Rating: 5,
            Brand: "VAN HEUSEN",
            Title: "Printed Men Polo Neck Blue T-Shirt",
            Image1: "https://rukminim1.flixcart.com/image/832/832/l3rmzrk0/t-shirt/x/m/l/-original-imaget6ehgqfzzae.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/l3rmzrk0/t-shirt/o/g/g/-original-imaget6egznqw9wm.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/l3rmzrk0/t-shirt/l/t/j/-original-imaget6egmvthmdf.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/l3rmzrk0/t-shirt/f/p/p/-original-imaget6etbsf9zsa.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/l3rmzrk0/t-shirt/8/6/k/-original-imaget6egr49zh5b.jpeg?q=70",
        },
        {
            Price: 2519,
            Rating: 4,
            Brand: "Calvin Klein Jeans",
            Title: "Solid Men Polo Neck Blue T-Shirt",
            Image1: "https://rukminim1.flixcart.com/image/832/832/l0igvww0/t-shirt/k/i/d/m-j315603cbk-calvin-klein-jeans-original-imagca7enwhuntwc.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/l0igvww0/t-shirt/j/c/d/m-j315603cbk-calvin-klein-jeans-original-imagca7efequsaz6.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/l0igvww0/t-shirt/i/y/m/m-j315603cbk-calvin-klein-jeans-original-imagca7efwcyakmz.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/l0igvww0/t-shirt/j/f/o/m-j315603cbk-calvin-klein-jeans-original-imagca7e9sncxhg5.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/l0igvww0/t-shirt/r/l/m/m-j315603cbk-calvin-klein-jeans-original-imagca7ef4pafkhf.jpeg?q=70",
        },
        {
            Price: 1799,
            Rating: 4,
            Brand: "ADIDAS",
            Title: "Printed Men Round Neck Black T-Shirt",
            Image1: "https://rukminim1.flixcart.com/image/832/832/ky7lci80/t-shirt/x/3/i/-original-imagagywmnhzdguv.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/ky7lci80/t-shirt/v/4/m/-original-imagagywkq5ckwhq.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/ky7lci80/t-shirt/m/7/j/-original-imagagywvhj6pnhz.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/ky7lci80/t-shirt/s/u/o/-original-imagagywt7fsgkng.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/ky7lci80/t-shirt/u/s/a/-original-imagagywgbpjfzbp.jpeg?q=70",
        },
        {
            Price: 1049,
            Rating: 4,
            Brand: "ADIDAS",
            Title: "Printed Men Round Neck Blue T-Shirt",
            Image1: "https://rukminim1.flixcart.com/image/832/832/kg8avm80-0/t-shirt/i/h/5/m-gd5328-adidas-original-imafwgfrmykxdgyz.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/kg8avm80-0/t-shirt/2/f/m/m-gd5328-adidas-original-imafwgfrhh7ayzg5.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/kg8avm80-0/t-shirt/c/2/x/m-gd5328-adidas-original-imafwgfrjtb9hdfs.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/kg8avm80-0/t-shirt/s/o/b/m-gd5328-adidas-original-imafwgfr4nu5qjdm.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/kg8avm80-0/t-shirt/w/n/x/m-gd5328-adidas-original-imafwgfrsz6hgk6y.jpeg?q=70",
        },
        {
            Price: 1166,
            Rating: 5,
            Brand: "NIKE",
            Title: "Printed Men Round Neck Yellow T-Shirt",
            Image1: "https://rukminim1.flixcart.com/image/832/832/kzllrbk0/t-shirt/4/r/u/m-dm5681-739-nike-original-imagbks44atyxhdv.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/kzllrbk0/t-shirt/y/n/q/m-dm5681-739-nike-original-imagbks43eyv3eay.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/kzllrbk0/t-shirt/j/f/s/m-dm5681-739-nike-original-imagbks46xz3upjx.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/kzllrbk0/t-shirt/9/f/b/m-dm5681-739-nike-original-imagbks4bvdyz2bz.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/kzllrbk0/t-shirt/9/y/i/m-dm5681-739-nike-original-imagbks4dda5m683.jpeg?q=70",
        },
        {
            Price: 647,
            Rating: 4,
            Brand: "NIKE",
            Title: "Perforations Men Round Neck Blue T-Shirt",
            Image1: "https://rukminim1.flixcart.com/image/832/832/kmds4nk0/t-shirt/2/a/l/m-cj5333-480-nike-original-imagfagkynbhvhzh.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/kmds4nk0/t-shirt/9/8/u/m-cj5333-480-nike-original-imagfagktpq8rbah.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/kmds4nk0/t-shirt/c/j/u/m-cj5333-480-nike-original-imagfagkcy4g95xx.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/kmds4nk0/t-shirt/8/9/h/m-cj5333-480-nike-original-imagfagk4yprcphy.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/kmds4nk0/t-shirt/e/f/r/m-cj5333-480-nike-original-imagfagkxr5ngh8c.jpeg?q=70",
        },
        {
            Price: 797,
            Rating: 5,
            Brand: "NIKE",
            Title: "Printed Men Round Neck Black T-Shirt",
            Image1: "https://rukminim1.flixcart.com/image/832/832/kr9jafk0/t-shirt/3/w/x/m-dj3722-010-nike-original-imag53b8722fnmum.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/kr9jafk0/t-shirt/0/a/e/m-dj3722-010-nike-original-imag53b85jzrh4gy.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/kr9jafk0/t-shirt/q/h/e/m-dj3722-010-nike-original-imag53b8eh4vzdh5.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/kr9jafk0/t-shirt/q/f/f/m-dj3722-010-nike-original-imag53b8bz75vzwj.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/kr9jafk0/t-shirt/z/y/o/m-dj3722-010-nike-original-imag53b8f9pqxzgg.jpeg?q=70",
        },
        {
            Price: 749,
            Rating: 4,
            Brand: "PUMA",
            Title: "Printed Men Crew Neck Black T-Shirt",
            Image1: "https://rukminim1.flixcart.com/image/832/832/l33cia80/t-shirt/h/2/s/m-84867701-puma-original-imageaghgfzzh3h8.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/l33cia80/t-shirt/6/g/9/m-84867701-puma-original-imageaghecyzswdh.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/l33cia80/t-shirt/g/3/z/m-84867701-puma-original-imageaghu8hz7nnr.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/l33cia80/t-shirt/c/s/y/m-84867701-puma-original-imageagh7rgc9ftv.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/l33cia80/t-shirt/a/p/f/m-84867701-puma-original-imageaghjpgyszx6.jpeg?q=70",
        },
        {
            Price: 535,
            Rating: 5,
            Brand: "PUMA",
            Title: "Printed Men Round Neck Black T-Shirt",
            Image1: "https://rukminim1.flixcart.com/image/832/832/kst9gnk0/t-shirt/6/v/1/xs-84789902-puma-original-imag6am5smhxfaht.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/kst9gnk0/t-shirt/z/v/7/xs-84789902-puma-original-imag6am5usbhhshz.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/kst9gnk0/t-shirt/5/k/v/xs-84789902-puma-original-imag6am5ykbu6vfe.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/kst9gnk0/t-shirt/3/l/l/xs-84789902-puma-original-imag6am5pkzknghh.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/kst9gnk0/t-shirt/1/q/j/xs-84789902-puma-original-imag6am5jzch4yqd.jpeg?q=70",
        },
    ],

    [
        {
            Price: 2144,
            Rating: 3,
            Brand: "NEEMANS",
            Title: "ReLive Knit Casual Lace Up Stylish Slip On Sneakers For Men",
            Image1: "https://rukminim1.flixcart.com/image/832/832/l4fxh8w0/shoe/f/h/i/6-nm-kjb-neeman-s-black-melange-original-imagfc44bxe6hvvb.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/l4fxh8w0/shoe/p/n/e/6-nm-kjb-neeman-s-black-melange-original-imagfc44ksbbppbj.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/l4fxh8w0/shoe/v/u/u/6-nm-kjb-neeman-s-black-melange-original-imagfc44yqwzvcdq.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/l4fxh8w0/shoe/s/f/z/6-nm-kjb-neeman-s-black-melange-original-imagfc44zu4haa53.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/l4fxh8w0/shoe/p/t/k/6-nm-kjb-neeman-s-black-melange-original-imagfc44szahzduy.jpeg?q=70",
        },
        {
            Price: 2520,
            Rating: 4,
            Brand: "NEEMANS",
            Title: "Loafers For Men (Navy)",
            Image1: "https://rukminim1.flixcart.com/image/832/832/kx9as280/shoe/s/1/n/6-nm-wm-mb-neeman-s-midnight-blue-original-imag9rbdgwzcduyf.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/kx9as280/shoe/y/8/d/6-nm-wm-mb-neeman-s-midnight-blue-original-imag9rbdusptcgvh.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/kx9as280/shoe/p/m/l/6-nm-wm-mb-neeman-s-midnight-blue-original-imag9rbdwqey9vtg.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/kx9as280/shoe/k/0/j/6-nm-wm-mb-neeman-s-midnight-blue-original-imag9rbdz3vgsznb.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/kyxb9u80/shoe/d/x/t/9-nm-kjb-9-neeman-s-hale-black-original-imagbfywvgznqnaf.jpeg?q=70",
        },
        {
            Price: 2500,
            Rating: 5,
            Brand: "ADIDAS",
            Title: "Primierto M Running Shoes For Men",
            Image1: "https://rukminim1.flixcart.com/image/832/832/l1tmf0w0/shoe/9/5/u/7-ga1188-7-adidas-shanav-stone-cblack-original-imagdaufprur8vyh.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/l1tmf0w0/shoe/y/q/b/7-ga1188-7-adidas-shanav-stone-cblack-original-imagdauffqxftf3x.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/l1tmf0w0/shoe/x/i/k/7-ga1188-7-adidas-shanav-stone-cblack-original-imagdauf4znp8pke.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/l1tmf0w0/shoe/c/s/2/7-ga1188-7-adidas-shanav-stone-cblack-original-imagdaufxfaejrzh.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/l1tmf0w0/shoe/c/z/0/7-ga1188-7-adidas-shanav-stone-cblack-original-imagdaufkfavqaja.jpeg?q=70",
        },
        {
            Price: 6599,
            Rating: 3,
            Brand: "ADIDAS",
            Title: "SL20.3 M Running Shoes For Men",
            Image1: "https://rukminim1.flixcart.com/image/832/832/l1tmf0w0/shoe/b/t/p/6-gy0559-6-adidas-orbgry-reatea-pullim-original-imagdarjga7az9ex.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/l1tmf0w0/shoe/s/c/e/6-gy0559-6-adidas-orbgry-reatea-pullim-original-imagdarjk5qr9qge.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/l1tmf0w0/shoe/j/h/h/6-gy0559-6-adidas-orbgry-reatea-pullim-original-imagdarjnduzyrg6.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/l1tmf0w0/shoe/1/g/s/6-gy0559-6-adidas-orbgry-reatea-pullim-original-imagdarjvn8away2.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/l1tmf0w0/shoe/j/u/o/6-gy0559-6-adidas-orbgry-reatea-pullim-original-imagdarjta9zhnu5.jpeg?q=70",
        },
        {
            Price: 3559,
            Rating: 5,
            Brand: "CLARKS",
            Title: "Casuals For men",
            Image1: "https://rukminim1.flixcart.com/image/832/832/kzogn0w0/shoe/m/t/h/6-5-26158290-6-5-clarks-brown-original-imagbn46vmwbhgzv.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/kzogn0w0/shoe/q/l/a/6-5-26158290-6-5-clarks-brown-original-imagbn46dhywe9g2.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/kzogn0w0/shoe/6/v/n/6-5-26158290-6-5-clarks-brown-original-imagbn46wz9jkfgb.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/kzogn0w0/shoe/n/d/j/6-5-26158290-6-5-clarks-brown-original-imagbn46gqkvzmza.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/kzogn0w0/shoe/c/m/d/6-5-26158290-6-5-clarks-brown-original-imagbn46hmdfncuu.jpeg?q=70",
        },
        {
            Price: 1749,
            Rating: 4,
            Brand: "BATA",
            Title: "Casuals For Men",
            Image1: "https://rukminim1.flixcart.com/image/832/832/kwfaj680/shoe/d/2/l/9-8238481-9-bata-brown-original-imag93rjrv4zbmjv.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/kwfaj680/shoe/6/x/f/9-8238481-9-bata-brown-original-imag93rjegwtp7ah.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/kwfaj680/shoe/d/4/x/9-8238481-9-bata-brown-original-imag93rjzkvpmpbw.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/kwfaj680/shoe/b/x/c/9-8238481-9-bata-brown-original-imag93rjkhvhzg48.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/kwfaj680/shoe/l/v/s/9-8238481-9-bata-brown-original-imag93rjyq5nyhj7.jpeg?q=70",
        },
        {
            Price: 998,
            Rating: 4,
            Brand: "BATA",
            Title: "OXFORD SHOES Oxford For Men",
            Image1: "https://rukminim1.flixcart.com/image/832/832/kka1si80/shoe/g/d/o/10-831-6210-10-bata-black-original-imafzzfsyhf6gxeh.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/kka1si80/shoe/k/c/n/10-831-6210-10-bata-black-original-imafzzfswfgrhvyz.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/kka1si80/shoe/g/d/o/10-831-6210-10-bata-black-original-imafzzfsyhf6gxeh.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/kka1si80/shoe/j/a/i/10-831-6210-10-bata-black-original-imafzzfsxsna4esc.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/kka1si80/shoe/t/9/5/10-831-6210-10-bata-black-original-imafzzfsxbvtanmd.jpeg?q=70",
        },
        {
            Price: 3249,
            Rating: 3,
            Brand: "CLARKS",
            Title: "Sneakers For Men",
            Image1: "https://rukminim1.flixcart.com/image/832/832/kxc5nrk0/shoe/v/p/r/8-5-26162950-9-5-clarks-black-original-imag9snvnzvk7yc8.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/kxc5nrk0/shoe/4/3/9/8-5-26162950-9-5-clarks-black-original-imag9snverg4jh7r.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/kxc5nrk0/shoe/b/f/s/8-5-26162950-9-5-clarks-black-original-imag9snvyhpjzqmx.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/kxc5nrk0/shoe/t/s/v/8-5-26162950-9-5-clarks-black-original-imag9snv9ruzht8h.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/kxc5nrk0/shoe/v/s/g/8-5-26162950-9-5-clarks-black-original-imag9snvkzuwph9b.jpeg?q=70",
        },
        {
            Price: 559,
            Rating: 5,
            Brand: "BATA",
            Title: "SELAH Casuals For Men",
            Image1: "https://rukminim1.flixcart.com/image/832/832/l4yi7bk0/shoe/n/5/8/-original-imagfqsm2ujy9ad3.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/kwjkuq80/shoe/8/m/h/4-5519313-4-bata-blue-original-imag975wg6fq793x.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/kwjkuq80/shoe/l/w/c/4-5519313-4-bata-blue-original-imag975wcqmrzuzs.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/kwjkuq80/shoe/p/d/n/4-5519313-4-bata-blue-original-imag975wdvzyhgwg.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/kwjkuq80/shoe/s/w/b/4-5519313-4-bata-blue-original-imag975wjmdzzfkr.jpeg?q=70",
        },
        {
            Price: 1649,
            Rating: 3,
            Brand: "NEEMANS",
            Title: "Sneakers For Men",
            Image1: "https://rukminim1.flixcart.com/image/832/832/kpvivm80/shoe/2/k/p/6-nm-cc-ic-neemans-ivory-cream-original-imag4yrnbhph2jf4.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/kpvivm80/shoe/3/i/s/6-nm-cc-ic-neemans-ivory-cream-original-imag4yrnzppgb3wp.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/kpvivm80/shoe/q/z/c/6-nm-cc-ic-neemans-ivory-cream-original-imag4yrnnxutvfh5.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/kpvivm80/shoe/j/i/a/6-nm-cc-ic-neemans-ivory-cream-original-imag4yrnvvzatddt.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/kpvivm80/shoe/p/s/e/6-nm-cc-ic-neemans-ivory-cream-original-imag4yrnzgxrrjqg.jpeg?q=70",
        },
    ],

    [
        {
            Price: 6115,
            Rating: 5,
            Brand: "TITAN",
            Title: "Workwear Watch Multifunction GENTS CLASSIQUE1805NM01 Analog Watch - For Men",
            Image1: "https://rukminim1.flixcart.com/image/832/832/l4n2oi80/watch/2/g/r/1-workwear-watch-multifunction-titan-men-original-imagfg5my554quda.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/l4n2oi80/watch/g/2/r/1-workwear-watch-multifunction-titan-men-original-imagfg5mfv6gaays.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/l4n2oi80/watch/3/k/e/1-workwear-watch-multifunction-titan-men-original-imagfg5ms422pucr.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/l4n2oi80/watch/q/k/o/1-workwear-watch-multifunction-titan-men-original-imagfg5mvqg8tmfm.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/k12go7k0/watch/u/u/p/2486sm02-titan-original-imafkhvd75urg2sj.jpeg?q=70",
        },
        {
            Price: 11495,
            Rating: 5,
            Brand: "TITAN",
            Title: "NN1683NL01 Analog Watch - For Men",
            Image1: "https://rukminim1.flixcart.com/image/832/832/k0zlsi80/watch/x/s/w/nk1683nl01a-titan-original-imafkngmzhh6fc7s.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/k0zlsi80/watch/x/s/w/nk1683nl01a-titan-original-imafkngchxjhgzey.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/k0zlsi80/watch/x/s/w/nk1683nl01a-titan-original-imafknhsnrd3wjyg.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/k0zlsi80/watch/x/s/w/nk1683nl01a-titan-original-imafkngjgg9wn4zz.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/k0zlsi80/watch/x/s/w/nk1683nl01a-titan-original-imafk9vqzyatezjw.jpeg?q=70",
        },
        {
            Price: 6159,
            Rating: 5,
            Brand: "TITAN",
            Title: "NN90093SL01 Analog Watch - For Men",
            Image1: "https://rukminim1.flixcart.com/image/832/832/k0plpjk0/watch/z/b/q/90093sl01-titan-original-imafkg474hznuzhb.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/k0plpjk0/watch/z/b/q/90093sl01-titan-original-imafkg47gzg8vmph.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/k0plpjk0/watch/z/b/q/90093sl01-titan-original-imafkg47aa23a6ff.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/k0plpjk0/watch/z/b/q/90093sl01-titan-original-imafkg4288wtrtqn.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/k0zlsi80/watch/x/s/w/nk1683nl01a-titan-original-imafk9vqzyatezjw.jpeg?q=70",
        },
        {
            Price: 5845,
            Rating: 5,
            Brand: "TITAN",
            Title: "NN1683NL01 Analog Watch",
            Image1: "https://rukminim1.flixcart.com/image/832/832/l4oi4cw0/watch/r/4/k/1-workwear-multifunction-titan-men-original-imagfg7m5gvqx4kt.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/l4oi4cw0/watch/c/q/6/1-workwear-multifunction-titan-men-original-imagfg7mejaw6cfj.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/l4oi4cw0/watch/2/o/q/1-workwear-multifunction-titan-men-original-imagfg7mx63mwjhg.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/l4oi4cw0/watch/w/5/z/1-workwear-multifunction-titan-men-original-imagfg7mz5dafagr.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/l4oi4cw0/watch/3/w/6/1-workwear-multifunction-titan-men-original-imagfg7mszzpmht5.jpeg?q=70",
        },
        {
            Price: 6719,
            Rating: 5,
            Brand: "TITAN",
            Title: "NN90106KL01 Analog Watch - For Men",
            Image1: "https://rukminim1.flixcart.com/image/832/832/k0plpjk0/watch/g/5/u/90106kl01-titan-original-imafkg8n8faamgmz.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/832/832/k0plpjk0/watch/g/5/u/90106kl01-titan-original-imafkg8n5t9gznrs.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/832/832/k0plpjk0/watch/g/5/u/90106kl01-titan-original-imafkg7vkm5wypgh.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/832/832/k0plpjk0/watch/g/5/u/90106kl01-titan-original-imafkg82sjwn4hfb.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/832/832/k0plpjk0/watch/g/5/u/90106kl01-titan-original-imafkg7vkm5wypgh.jpeg?q=70",
        },
    ],
];

const Electronics = [
    [
        {
            Price: 49990,
            Rating: 5,
            Brand: "LG",
            Title: "LG UQ7500 139 cm (55 inch) Ultra HD (4K) LED Smart WebOS TV 2022 Edition (55UQ7500PSF)",
            Image1: "https://rukminim1.flixcart.com/image/416/416/l572ufk0/television/z/h/2/55uq7500psf-55uq7500psf-lg-original-imagfxgxhgup2yeb.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/l572ufk0/television/k/b/n/65uq7500psf-65uq7500psf-lg-original-imagfxgxyypmrhkt.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/l572ufk0/television/m/b/h/55uq7500psf-55uq7500psf-lg-original-imagfxgxgp4btnsy.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/l572ufk0/television/f/n/h/55uq7500psf-55uq7500psf-lg-original-imagfxgxpthabhja.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/l572ufk0/television/z/m/h/55uq7500psf-55uq7500psf-lg-original-imagfxgxzssq4kkk.jpeg?q=70",
        },
        {
            Price: 70000,
            Rating: 4,
            Brand: "LG",
            Title: "LG 139 cm (55 inch) Ultra HD (4K) LCD Smart TV (55NANO75TPZ)",
            Image1: "https://rukminim1.flixcart.com/image/416/416/l4ln8nk0/television/j/i/s/55nano75tpz-55nano75tpz-atr-lg-original-imagfgs8yfzzxgzn.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/l4ln8nk0/television/p/1/s/55nano75tpz-55nano75tpz-atr-lg-original-imagfgs8ekh8vjxg.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/l4ln8nk0/television/3/g/q/55nano75tpz-55nano75tpz-atr-lg-original-imagfgs8re8e3whh.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/l4oi4cw0/television/n/y/h/55nano75tpz-55nano75tpz-atr-lg-original-imagfgxtrb6gy2uy.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/l4oi4cw0/television/i/e/o/55nano75tpz-55nano75tpz-atr-lg-original-imagfgxtjkhzcggx.jpeg?q=70",
        },
        {
            Price: 119889,
            Rating: 4,
            Brand: "SAMSUNG",
            Title: "SAMSUNG QN90BAKL 125 cm (50 inch) QLED Ultra HD (4K) Smart Tizen TV (QA50QN90BAKLXL)",
            Image1: "https://rukminim1.flixcart.com/image/416/416/xif0q/television/a/e/d/qa50qn90baklxl-samsung-original-imagg9pag4yjzpzu.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/xif0q/television/u/k/q/qa50qn90baklxl-samsung-original-imagg9pawxjeqhkm.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/xif0q/television/w/m/g/qa50qn90baklxl-samsung-original-imagg9paspemx5ku.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/xif0q/television/9/s/y/qa50qn90baklxl-samsung-original-imagg9pajqhsyt9x.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/xif0q/television/b/b/t/qa50qn90baklxl-samsung-original-imagg9pahtdtdzef.jpeg?q=70",
        },
        {
            Price: 84990,
            Rating: 4,
            Brand: "TOSHIBA",
            Title: "TOSHIBA M550LP 164 cm (65 inch) QLED Ultra HD (4K) Smart Google TV TV (65M550LP)",
            Image1: "https://rukminim1.flixcart.com/image/416/416/l51d30w0/television/z/p/n/-original-imagft56gpmgyefm.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/xif0q/television/x/k/x/55m550lp-toshiba-original-imaggd3mhsgqkkud.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/xif0q/television/f/b/z/65m550lp-toshiba-original-imaggf7cqzwd67gb.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/xif0q/television/m/1/w/55m550lp-toshiba-original-imaggd3mdpz4dc7d.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/xif0q/television/i/3/p/55m550lp-toshiba-original-imaggd3msfykbtva.jpeg?q=70",
        },
        {
            Price: 19999,
            Rating: 4,
            Brand: "PANASONIC",
            Title: "Panasonic 82 cm (32 inch) HD Ready LED Smart TV (TH-32LS550DX)",
            Image1: "https://rukminim1.flixcart.com/image/416/416/l5ld8y80/television/m/h/g/th-32ls550dx-panasonic-original-imagg8e3bebx6ddr.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/l5ld8y80/television/0/p/w/th-32ls550dx-panasonic-original-imagg8e35a8wxztd.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/l5ld8y80/television/p/a/y/th-32ls550dx-panasonic-original-imagg8e3aw8udyqq.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/l5ld8y80/television/y/k/b/th-32ls550dx-panasonic-original-imagg8e3hswvmu9q.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/l5ld8y80/television/k/e/z/th-32ls550dx-panasonic-original-imagg8e37nyuykeq.jpeg?q=70",
        },
        {
            Price: 15499,
            Rating: 5,
            Brand: "ONEPLUS",
            Title: "OnePlus Y1S 80 cm (32 inch) HD Ready LED Smart Android TV with Android 11 and Bezel-Less Frame (32HD2A00)",
            Image1: "https://rukminim1.flixcart.com/image/416/416/kzfvzww0/television/e/b/b/32hd2a00-32-y1s-oneplus-original-imagbgcewfqywgk7.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/kzfvzww0/television/g/s/f/32hd2a00-32-y1s-oneplus-original-imagbgcehue22j2f.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/kzfvzww0/television/q/r/j/32hd2a00-32-y1s-oneplus-original-imagbgcewqjebazf.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/kzfvzww0/television/j/j/n/32hd2a00-32-y1s-oneplus-original-imagbgce3gexspz6.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/kzfvzww0/television/u/g/l/32hd2a00-32-y1s-oneplus-original-imagbgcehnmgschv.jpeg?q=70",
        },
    ],

    [
        {
            Price: 62990,
            Rating: 5,
            Brand: "ASUS",
            Title: "ASUS VivoBook K15 OLED (2022) Core i5 11th Gen  K513EA-L523WS Thin and Light Laptop ",
            Image1: "https://rukminim1.flixcart.com/image/416/416/l2dmky80/computer/0/3/a/-original-imagdqdytfgwhsah.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/l2dmky80/computer/1/n/k/-original-imagdqdyuhagewtt.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/l2dmky80/computer/k/i/t/-original-imagdqdykgadhntq.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/l13whow0/computer/q/x/d/-original-imagcqvpbe4y9cgh.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/l13whow0/computer/p/w/k/-original-imagcqvp2cvf76fz.jpeg?q=70",
        },
        {
            Price: 48990,
            Rating: 5,
            Title: "ASUS VivoBook 15 (2022) Core i5 11th Gen X515EA-EJ502WS Thin and Light LaptopASUS",
            Brand: "ASUS",
            Image1: "https://rukminim1.flixcart.com/image/416/416/kp2y2kw0/computer/y/0/c/na-thin-and-light-laptop-asus-original-imag3ebnzawky4kn.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/l2m78280/computer/r/i/1/-original-imagdx9qedcveu2m.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/l2m78280/computer/r/z/d/-original-imagdx9scxakr26c.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/l2m78280/computer/m/x/3/-original-imagdx9qetmzqjz7.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/l2m78280/computer/1/z/l/-original-imagdx9qzpmh4hvf.jpeg?q=70",
        },
        {
            Price: 34990,
            Rating: 5,
            Brand: "DELL",
            Title: "DELL Vostro Core i3 10th Gen Vostro 3401 Thin and Light Laptop",
            Image1: "https://rukminim1.flixcart.com/image/416/416/krf91u80/computer/2/m/b/na-thin-and-light-laptop-dell-original-imag585xzyrystrc.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/krf91u80/computer/1/a/s/na-thin-and-light-laptop-dell-original-imag585xs5bhqhwe.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/krf91u80/computer/o/q/a/na-thin-and-light-laptop-dell-original-imag585xexmdgpvc.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/krf91u80/computer/u/a/2/na-thin-and-light-laptop-dell-original-imag585xzgbueysp.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/krf91u80/computer/k/4/j/na-thin-and-light-laptop-dell-original-imag585xcnftvpn6.jpeg?q=70",
        },
        {
            Price: 99990,
            Rating: 5,
            Brand: "HP",
            Title: "HP Spectre x360 14 Series Intel EVO Core i5 11th Gen 14-ea0538TU Thin and Light Laptop",
            Image1: "https://rukminim1.flixcart.com/image/416/416/l2ghgnk0/computer/4/a/h/-original-imagdsjrtys36xfr.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/l2ghgnk0/computer/e/c/r/-original-imagdsjrchh4dhhr.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/l2ghgnk0/computer/m/3/k/-original-imagdsjrkvs72zjz.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/l2ghgnk0/computer/y/f/f/-original-imagdsjrhw9yg6y9.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/l2ghgnk0/computer/8/q/u/-original-imagdsjrqufmvwqb.jpeg?q=70",
        },
        {
            Price: 30990,
            Rating: 5,
            Brand: "HP",
            Title: "HP Athlon Dual Core 3050U 14s-fq0568AU Thin and Light Laptop",
            Image1: "https://rukminim1.flixcart.com/image/416/416/xif0q/computer/l/6/o/14s-fq0568au-thin-and-light-laptop-hp-original-imaggdzyrdf7hbkr.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/xif0q/computer/p/d/m/14s-fq0568au-thin-and-light-laptop-hp-original-imaggdzyy7yjh89t.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/xif0q/computer/n/u/e/14s-fq0568au-thin-and-light-laptop-hp-original-imaggdzywe582zkg.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/xif0q/computer/x/a/s/14s-fq0568au-thin-and-light-laptop-hp-original-imaggdzykgxbrz75.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/xif0q/computer/z/p/c/14s-fq0568au-thin-and-light-laptop-hp-original-imaggdzytmqtjdug.jpeg?q=70",
        },
        {
            Price: 55800,
            Rating: 5,
            Brand: "ASUS",
            Title: "ASUS Core i5 11th Gen X712EA-AU521TS Thin and Light Laptop",
            Image1: "https://rukminim1.flixcart.com/image/416/416/kwl0akw0/computer/0/v/s/x712ea-au511ts-thin-and-light-laptop-asus-original-imag98bdf6decxkg.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/kwl0akw0/computer/i/q/u/x712ea-au521ts-thin-and-light-laptop-asus-original-imag98bnzm8bdtgg.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/kwl0akw0/computer/b/a/j/x712ea-au521ts-thin-and-light-laptop-asus-original-imag98bnyszchagn.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/kwl0akw0/computer/u/8/e/x712ea-au511ts-thin-and-light-laptop-asus-original-imag98bdzpqv8huz.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/kwl0akw0/computer/f/d/8/x712ea-au511ts-thin-and-light-laptop-asus-original-imag98bddg4fh8ck.jpeg?q=70",
        },
    ],

    [
        {
            Price: 1799,
            Rating: 5,
            Brand: "BOAT",
            Title: "boAt Rockerz 650 with 60 Hours Battery Backup Bluetooth Headset",
            Image1: "https://rukminim1.flixcart.com/image/416/416/kq9ta4w0/headphone/e/y/v/rockerz-650-boat-original-imag4bfgjygmfbz6.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/kq9ta4w0/headphone/d/d/u/rockerz-650-boat-original-imag4bfgq2y4dfdk.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/kq9ta4w0/headphone/k/w/n/rockerz-650-boat-original-imag4bfgyb4rfqhw.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/kq9ta4w0/headphone/i/t/c/rockerz-650-boat-original-imag4bfgd8xxkr3n.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/kq9ta4w0/headphone/o/r/3/rockerz-650-boat-original-imag4bfgt3fjhhgz.jpeg?q=70",
        },
        {
            Price: 899,
            Rating: 5,
            Brand: "BOAT",
            Title: "boAt Rockerz 400 Bluetooth Headset",
            Image1: "https://rukminim1.flixcart.com/image/416/416/kfpq5jk0-0/headphone/c/n/6/rockerz-400-rockerz-410-boat-original-imafw45vhyrax3zj.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/kfpq5jk0-0/headphone/n/x/n/rockerz-400-rockerz-410-boat-original-imafw45vctcfp6ds.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/kfpq5jk0-0/headphone/e/i/d/rockerz-400-rockerz-410-boat-original-imafw45vmxzjmytv.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/kfpq5jk0-0/headphone/y/h/a/rockerz-400-rockerz-410-boat-original-imafw45venrxdgsf.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/kfpq5jk0-0/headphone/b/6/s/rockerz-400-rockerz-410-boat-original-imafw45vzvvbzgk4.jpeg?q=70",
        },
        {
            Price: 849,
            Rating: 5,
            Brand: "SONY",
            Title: "SONY 310AP Wired Headset",
            Image1: "https://rukminim1.flixcart.com/image/416/416/jh6l2fk0/headphone/c/a/g/sony-mdr-zx310ap-original-imaf59ebtsdeaypz.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/jh6l2fk0/headphone/c/a/g/sony-mdr-zx310ap-original-imaf59eb7xrcumuh.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/jh6l2fk0/headphone/c/a/g/sony-mdr-zx310ap-original-imaf59ebzabghtpk.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/jh6l2fk0/headphone/c/a/g/sony-mdr-zx310ap-original-imaf59ebkytcnjqh.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/jh6l2fk0/headphone/c/a/g/sony-mdr-zx310ap-original-imaf59eb7gdsffxa.jpeg?q=70",
        },
        {
            Price: 1499,
            Rating: 4,
            Brand: "JBL",
            Title: "JBL Quantum 100 Wired Gaming Headset",
            Image1: "https://rukminim1.flixcart.com/image/416/416/kflftzk0pkrrdj/headphone-refurbished/w/x/a/a-quantum-100-jbl-original-imafw3z6ryqbsb6x.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/kflftzk0pkrrdj/headphone-refurbished/w/x/a/a-quantum-100-jbl-original-imafw3z6csbdwbwj.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/kflftzk0pkrrdj/headphone-refurbished/w/x/a/a-quantum-100-jbl-original-imafw3z64yzg9b6d.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/kflftzk0pkrrdj/headphone-refurbished/w/x/a/a-quantum-100-jbl-original-imafw3z7bfrh7s2g.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/kflftzk0pkrrdj/headphone-refurbished/w/x/a/a-quantum-100-jbl-original-imafw3z6n9dg896y.jpeg?q=70",
        },
        {
            Price: 799,
            Rating: 5,
            Brand: "BOAT",
            Title: "boAt BassHeads 900 Wired Headset",
            Image1: "https://rukminim1.flixcart.com/image/416/416/k0vbgy80pkrrdj/headphone/6/b/9/boat-bassheads-900-super-extra-bass-original-imafg96ydu4getz7.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/k0vbgy80pkrrdj/headphone/6/b/9/boat-bassheads-900-super-extra-bass-original-imafg96y3agyxuhg.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/k0vbgy80pkrrdj/headphone/6/b/9/boat-bassheads-900-super-extra-bass-original-imafg96yzmgtazgr.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/k0vbgy80pkrrdj/headphone/6/b/9/boat-bassheads-900-super-extra-bass-original-imafg96yqryjhu2n.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/k0vbgy80pkrrdj/headphone/6/b/9/boat-bassheads-900-super-extra-bass-original-imafg96y3uqxydk7.jpeg?q=70",
        },
    ],

    [
        {
            Price: 1099,
            Rating: 5,
            Brand: "BOAT",
            Title: "boAt Rockerz 255F Pro with Fast Charging Bluetooth Headset",
            Image1: "https://rukminim1.flixcart.com/image/416/416/ksw4ccw0/headphone/h/n/o/rockerz-255-pro-rockerz-255f-pro-boat-original-imag6cvfjgbwdbeg.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/l31x2fk0/headphone/j/k/h/-original-image9egttgwfzky.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/l31x2fk0/headphone/w/1/i/-original-image9egztfwyky9.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/l31x2fk0/headphone/f/y/v/-original-image9eggsmgfh3c.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/l31x2fk0/headphone/i/s/5/-original-image9egmxwusjhh.jpeg?q=70",
        },
        {
            Price: 1299,
            Rating: 4,
            Brand: "BOAT",
            Title: "boAt Rockerz 333 Upto 30 Hours Battery Bluetooth Headset",
            Image1: "https://rukminim1.flixcart.com/image/416/416/kqttg280/headphone/r/d/7/rockerz-333-boat-original-imag4r33r4sezgjq.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/kqttg280/headphone/q/h/w/rockerz-333-boat-original-imag4r33apafmfgq.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/kqttg280/headphone/j/o/j/rockerz-333-boat-original-imag4r33rgwyuqs6.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/kqttg280/headphone/u/3/d/rockerz-333-boat-original-imag4r33kgbd55n7.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/kqttg280/headphone/r/x/3/rockerz-333-boat-original-imag4r33yzqe8wbe.jpeg?q=70",
        },
        {
            Price: 1999,
            Rating: 5,
            Brand: "SONY",
            Title: "SONY XB55AP Wired Headset",
            Image1: "https://rukminim1.flixcart.com/image/416/416/jdj4k280/headphone/h/3/p/sony-mdr-xb55ap-original-imaf2exaczs9hxr4.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/j4d1ua80/headset/h/3/p/sony-mdr-xb55ap-original-imaevah7myygex8y.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/j4d1ua80/headset/h/3/p/sony-mdr-xb55ap-original-imaevah7yxmzfgey.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/j4d1ua80/headset/h/3/p/sony-mdr-xb55ap-original-imaevah7wfbmxgvf.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/j4d1ua80/headset/h/3/p/sony-mdr-xb55ap-original-imaevah7vhgzzj3q.jpeg?q=70",
        },
        {
            Price: 1499,
            Rating: 4,
            Brand: "SONY",
            Title: "SONY WI-C200 Bluetooth Headset",
            Image1: "https://rukminim1.flixcart.com/image/416/416/k0bbb0w0pkrrdj/headphone-refurbished/g/8/s/b-wi-c200-sony-original-imafhtpnagnpe4dk.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/k0bbb0w0pkrrdj/headphone-refurbished/g/8/s/b-wi-c200-sony-original-imafhtpnnfq4hnqu.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/k0bbb0w0pkrrdj/headphone-refurbished/g/8/s/b-wi-c200-sony-original-imafhtpnzrzzsfsr.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/k0bbb0w0pkrrdj/headphone-refurbished/g/8/s/b-wi-c200-sony-original-imafhtpnhn3yegyg.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/k0bbb0w0pkrrdj/headphone-refurbished/g/8/s/b-wi-c200-sony-original-imafhtpnyzanwfps.jpeg?q=70",
        },
        {
            Price: 599,
            Rating: 4,
            Brand: "JBL",
            Title: "JBL C50HI Wired Headset",
            Image1: "https://rukminim1.flixcart.com/image/416/416/k0lbdzk0pkrrdj/headphone-refurbished/h/w/t/u-c50hiblk-jbl-original-imafhmzvhjegfbhz.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/k0lbdzk0pkrrdj/headphone-refurbished/h/w/t/u-c50hiblk-jbl-original-imafjjw535zd2jcg.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/k0lbdzk0pkrrdj/headphone-refurbished/h/w/t/u-c50hiblk-jbl-original-imafhyzxtaqkn369.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/k0lbdzk0pkrrdj/headphone-refurbished/h/w/t/u-c50hiblk-jbl-original-imafhmzvdrbqxj4m.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/jzn0tjk0/headphone/e/g/e/jbl-duet-arc-original-imafjjw5z4catgyh.jpeg?q=70",
        },
    ],

    [
        {
            Price: 4990,
            Rating: 4,
            Brand: "SONY",
            Title: "SONY WF-C500/WZ IN IPX4/20Hrs Battery Life Bluetooth Headset",
            Image1: "https://rukminim1.flixcart.com/image/416/416/ky7lci80/headphone/c/j/q/wf-c500-bz-in-sony-original-imagahvreyx7heq7.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/ky7lci80/headphone/d/w/b/wf-c500-bz-in-sony-original-imagahvremrk5kzd.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/ky7lci80/headphone/b/g/c/wf-c500-bz-in-sony-original-imagahvrcfzprwsd.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/ky7lci80/headphone/y/0/b/wf-c500-bz-in-sony-original-imagahvrh4tzugwh.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/ky7lci80/headphone/l/c/t/wf-c500-bz-in-sony-original-imagahvruktqakhp.jpeg?q=70",
        },
        {
            Price: 9990,
            Rating: 4,
            Brand: "SONY",
            Title: "SONY WF-H800 With 16hrs Battery Life Bluetooth Headset",
            Image1: "https://rukminim1.flixcart.com/image/416/416/kfcv6vk0-0/headphone/t/t/x/wf-h800-sony-original-imafvu65seh8befz.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/kfcv6vk0-0/headphone/l/y/s/wf-h800-sony-original-imafvu65hhfjzbr2.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/kfcv6vk0-0/headphone/n/u/k/wf-h800-sony-original-imafvu65nprkbqgr.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/kfcv6vk0-0/headphone/w/l/r/wf-h800-sony-original-imafvu65jutnyvmn.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/kfcv6vk0-0/headphone/s/k/s/wf-h800-sony-original-imafvu657ycgyves.jpeg?q=70",
        },
        {
            Price: 2999,
            Rating: 4,
            Brand: "JBL",
            Title: "JBL Wave100 with 20 Hours Playback, Dual Sound Modes",
            Image1: "https://rukminim1.flixcart.com/image/416/416/ksez24w0/headphone/m/o/f/jblw100twsblkin-jbl-original-imag5zhhvbgsd4bh.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/ksez24w0/headphone/e/h/z/jblw100twsblkin-jbl-original-imag5zhh9gshjjz4.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/ksez24w0/headphone/y/s/a/jblw100twsblkin-jbl-original-imag5zhhxrattmj5.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/ksez24w0/headphone/g/c/x/jblw100twsblkin-jbl-original-imag5zhhkpfusacf.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/ksez24w0/headphone/g/0/9/jblw100twsblkin-jbl-original-imag5zhhmhmgxucb.jpeg?q=70",
        },
        {
            Price: 5498,
            Rating: 4,
            Brand: "JBL",
            Title: "JBL Tune 230NC with Active Noise Cancellation,40Hr Playtime",
            Image1: "https://rukminim1.flixcart.com/image/416/416/l2jcccw0/headphone/y/w/p/-original-imagduyfccc4rqhd.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/l2jcccw0/headphone/d/k/l/-original-imagduyffkf6kr8b.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/l2jcccw0/headphone/b/v/w/-original-imagduyfpsystkgt.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/l2jcccw0/headphone/0/t/3/-original-imagduyfdhbsf3au.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/l2jcccw0/headphone/i/w/q/-original-imagduyfjzftwgtw.jpeg?q=70",
        },
        {
            Price: 449,
            Rating: 3,
            Brand: "SONY",
            Title: "raazdhavni i12 TWS Bluetooth Headset",
            Image1: "https://rukminim1.flixcart.com/image/416/416/l29c9e80/headphone/l/h/a/i12-tws-headset-white-true-wireless-raazdhavni-original-imagdn3ecfjpgqb6.jpeg?q=70",
            Image2: "https://rukminim1.flixcart.com/image/416/416/l29c9e80/headphone/7/d/i/i12-tws-headset-white-true-wireless-raazdhavni-original-imagdn3ejgthrezy.jpeg?q=70",
            Image3: "https://rukminim1.flixcart.com/image/416/416/l29c9e80/headphone/k/d/v/i12-tws-headset-white-true-wireless-raazdhavni-original-imagdn3ezgxtsmvq.jpeg?q=70",
            Image4: "https://rukminim1.flixcart.com/image/416/416/l29c9e80/headphone/5/h/x/i12-tws-headset-white-true-wireless-raazdhavni-original-imagdn3ezqyxqdzm.jpeg?q=70",
            Image5: "https://rukminim1.flixcart.com/image/416/416/l29c9e80/headphone/s/u/v/i12-tws-headset-white-true-wireless-raazdhavni-original-imagdn3ey5wefy4a.jpeg?q=70",
        },
    ],
];

// function to create product div
function productCreator(container, category) {
    for (let i = 0; i < category.length; i++) {
        for (let j = 0; j < category[i].length; j++) {
            container[i].innerHTML += `
        <div class="product">
            <img src="">
            <div class="product-description">
                <div class="rating" data-count=""></div>
                <div class="flex-container">
                    <div class="price" style="flex: 1;"></div>
                    <button class="preview" style="flex: 1;">View</button>
                </div>
            </div>
        </div>`;
        };
        productDetail(container[i].querySelectorAll(".product"), category[i]);
    };
};

// function to add details to each product div
function productDetail(Product, category) {
    for (let i = 0; i < Product.length; i++) {
        const stars = "★★★★★☆☆☆☆☆";

        Product[i].querySelector("img").setAttribute("src", category[i].Image1);
        Product[i].querySelector(".price").innerHTML = "₹ " + category[i].Price;
        Product[i].querySelector(".rating").innerHTML = stars.slice(5 - category[i].Rating, (5 - category[i].Rating) + 5);

        Product[i].querySelector("button").addEventListener("click", function () {
            const container = document.querySelector("#preview .category-container");
            container.querySelector(".displayImage").setAttribute("src", category[i].Image1);
            container.querySelector(".rated").innerHTML = category[i].Rating + "/5";
            container.querySelector(".stars").innerHTML = " " + stars.slice(5 - category[i].Rating, (5 - category[i].Rating) + 5);
            container.querySelector(".price").innerHTML = "₹ " + category[i].Price;
            container.querySelector(".brand-title").innerHTML = category[i].Brand + " | " + category[i].Title;
            container.querySelector(".image1").setAttribute("src", category[i].Image1);
            container.querySelector(".image2").setAttribute("src", category[i].Image2);
            container.querySelector(".image3").setAttribute("src", category[i].Image3);
            container.querySelector(".image4").setAttribute("src", category[i].Image4);
            container.querySelector(".image5").setAttribute("src", category[i].Image5);

            document.querySelector("#preview .fixed-container").style.display = ("flex");
        });
    };
};

//function for total, delivery, payable
var totalPrice = 0;
var eachProductprice;
var eachProductQuantity;
function updateTotal() {
    const productAdded = document.querySelectorAll("#cart .cart-container .flex-container");
    productAdded.forEach(function (container) {
        eachProductprice = container.querySelector(".price").innerHTML.replace("Price: ₹", "");
        eachProductQuantity = container.querySelector(".quantity").innerHTML.replace("Quantity: ", "");
    });
    totalPrice += (eachProductprice * eachProductQuantity);

    document.querySelector("#cart #totalprice .total").innerHTML = "₹" + " " + totalPrice;
    document.querySelector("#cart #totalprice .delivery").innerHTML = "₹" + " " + ((3 * (totalPrice / 100))).toFixed(2);
    document.querySelector("#cart #totalprice .totalpay").innerHTML = "₹" + " " + (totalPrice + (3 * (totalPrice / 100)));
};

//function for alert
function Alert(message) {
    const alert = document.querySelector(".alert");
    alert.style.display = ("flex");
    alert.innerHTML = message;
    setTimeout(function () {
        alert.style.display = ("none");
    }, 1500);
};

//fuction to change banner
var currentBanner = 0;
function changeBanner() {
    const banner = document.querySelector("aside img");
    const Prev = document.querySelector("aside .prev");
    const Next = document.querySelector("aside .next");
    const Dots = document.querySelectorAll(".dots span");

    const bannerImages = ["https://www.bycomercial.com/wp-content/uploads/2020/07/posts-Byc-115.jpg",
        "https://i02.appmifile.com/642_operator_in/29/07/2022/7034a9b84057fd1cc907d879f3480a03.jpg",
        "https://images.samsung.com/is/image/samsung/assets/in/offer/online/samsung-fest/b2c-flagship-1920x545-240722.jpg",
        "https://image01.realme.net/general/20220729/1659097859557.jpg.webp",
        "https://in.jbl.com/on/demandware.static/-/Sites-JB-INDIA-Library/default/dwce817290/home-hero-carousel/000_Gaming_08July_22_Des.jpg",
        "https://www.casio.com/content/casio/locales/in/en/products/_jcr_content/root/responsivegrid/image_1970305012_cop.casiocoreimg.jpeg/1650332429311/hero-pc.jpeg",
        "https://www.asus.com/WebsitesBanner/IN/banners/rijbo5tzw5h7h8as/rijbo5tzw5h7h8as-0_0_desktop_0_1X.jpg?webp",
        "https://www.bata.in/on/demandware.static/-/Sites-bata-in-Library/default/dw1629dece/Plp/Bata-EOSS-PLPBanner_Generic-June22-2250x500px.jpg",
        "https://newsolez.com/wp-content/uploads/2018/02/be982d86c62674978f5eea66aba3ba57.jpg",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Collection-Banner_346efdc6-82b3-4370-87b9-e018fe298c09_2000x.jpg?v=1658677055"];

    setInterval(function () {
        if (currentBanner >= bannerImages.length) { currentBanner = 0 };
        changeBannerDot();
        currentBanner++;
    }, 5000);

    Next.addEventListener("click", function () {
        currentBanner++;
        if (currentBanner >= bannerImages.length) { currentBanner = 0 };
        changeBannerDot();
    });

    Prev.addEventListener("click", function () {
        currentBanner--;
        if (currentBanner < 0) { currentBanner = bannerImages.length - 1 };
        changeBannerDot();
    });

    for (let currentDot = 0; currentDot < Dots.length; currentDot++) {
        Dots[currentDot].addEventListener("click", function () {
            currentBanner = currentDot;
            changeBannerDot();
        });
    };

    changeBannerDot();
    
    function changeBannerDot() {
        Dots.forEach(function (dot) {
            dot.style.width = "15px";
            dot.style.background = "#37beb0";
        });

        banner.setAttribute("src", bannerImages[currentBanner]);
        Dots[currentBanner].style.width = "30px";
        Dots[currentBanner].style.background = "#fff";
    };
};

//function to remove single product
function removeProduct(removeButton) {
    removeButton.forEach(function (button) {
        button.addEventListener("click", function () {
            var productPrice = (button.parentNode.parentNode.querySelector(".price").innerHTML).replace("Price: ₹", "");
            var productQuantity = (button.parentNode.parentNode.querySelector(".quantity").innerHTML).replace("Quantity: ", "")
            var newTotal = ((document.querySelector("#cart #totalprice .total").innerHTML.replace("₹ ", "")) - (productPrice * productQuantity));

            document.querySelector("#cart #totalprice .total").innerHTML = "₹" + " " + newTotal;
            document.querySelector("#cart #totalprice .delivery").innerHTML = "₹" + " " + (3 * (newTotal / 100));
            document.querySelector("#cart #totalprice .totalpay").innerHTML = "₹" + " " + (newTotal + (3 * (newTotal / 100)));

            totalPrice = newTotal;

            button.parentNode.parentNode.parentNode.style.display = ("none");
            Alert("Product remove from cart");
        })
    });
};