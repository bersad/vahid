<template>
  <q-layout view="hHh LpR fff">
    <header class="header">
        <div class="ps-top-bar">
            <div class="container">
                <div class="top-bar">
                    <div class="top-bar__left">
                        <ul class="nav-top">
                            <li class="nav-top-item"> <a class="nav-top-link text-success" href="#">ثبت نام کنید</a>
                            </li>
                        </ul>
                    </div>
                    <div class="top-bar__right">
                        <ul class="nav-top">
                            <li class="nav-top-item contact"><a class="nav-top-link" href="tel:970978-6290"> <i class="icon-telephone"></i><span>شماره تلفن:</span><span class="text-success font-bold">970 978-6290</span></a></li>
                            <li class="nav-top-item"><a class="nav-top-link" href="order-tracking.html">پیگیری سفارش</a></li>
                            <li class="nav-top-item languages"><a class="nav-top-link" href="javascript:void(0);"> <span class="current-languages">فارسی</span><i class="icon-chevron-down"></i></a>
                                <div class="select--dropdown">
                                    <ul class="select-languages">
                                        <li class="language-item" data-value="English"><a href="javascript:void(0);">English</a></li>
                                        <li class="active language-item" data-value="Brunei"><a href="javascript:void(0);">فارسی</a></li>
                                        <li class="language-item" data-value="Armenia"><a href="javascript:void(0);">Armenia</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-top-item currency"><a class="nav-top-link" href="javascript:void(0);"> <span class="current-currency">ریال</span><i class="icon-chevron-down"></i></a>
                                <div class="select--dropdown">
                                    <ul class="select-currency">
                                        <li class="currency-item" data-value="USD"><a href="javascript:void(0);">USD</a></li>
                                        <li class="active currency-item" data-value="VND"><a href="javascript:void(0);">ریال</a></li>
                                        <li class="currency-item" data-value="EUR"><a href="javascript:void(0);">EUR</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-top-item account"><a class="nav-top-link" href="javascript:void(0);"> <i class="icon-user"></i>سلام! <span class="font-bold">وحید</span></a>
                                <div class="account--dropdown">
                                    <div class="account-anchor">
                                        <div class="triangle"></div>
                                    </div>
                                    <div class="account__content">
                                        <ul class="account-list">
                                            <li class="title-item"> <a href="javascript:void(0);">My Account</a>
                                            </li>
                                            <li> <a href="#">Dasdboard</a>
                                            </li>
                                            <li> <a href="#">Account Setting</a>
                                            </li>
                                            <li> <a href="shopping-cart.html">Orders</a>
                                            </li>
                                            <li> <a href="wishlist.html">Wishlist</a>
                                            </li>
                                            <li> <a href="#">Shipping Address</a>
                                            </li>
                                        </ul>
                                        <hr>
                                        <ul class="account-list">
                                            <li class="title-item"> <a href="javascript:void(0);">Vendor Settings</a>
                                            </li>
                                            <li> <a href="#">Dasdboard</a>
                                            </li>
                                            <li> <a href="#">Products</a>
                                            </li>
                                            <li> <a href="shopping-cart.html">Orders</a>
                                            </li>
                                            <li> <a href="#">Settings</a>
                                            </li>
                                            <li> <a href="vendor-store.html">View Store</a>
                                            </li>
                                        </ul>
                                        <hr><a class="account-logout" href="#"><i class="icon-exit-left"></i>Log out</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="ps-header--center header--mobile">
            <div class="container">
                <div class="header-inner">
                    <div class="header-inner__left">
                        <button class="navbar-toggler"><i class="icon-menu"></i></button>
                    </div>
                    <div class="header-inner__center"><a class="logo open" href="index.html">فار<span class="text-black">مارت.</span></a></div>
                    <div class="header-inner__right">
                        <button class="button-icon icon-sm search-mobile"><i class="icon-magnifier"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <section class="ps-header--center header-desktop">
            <div class="container">
                <div class="header-inner">
                    <div class="header-inner__left"><a class="logo" href="index.html">فار<span class="text-black">مارت.</span></a>
                        <ul class="menu">
                            <li class="menu-item-has-children has-mega-menu">
                                <button class="category-toggler"><i class="icon-menu"></i></button>
                                <div class="mega-menu mega-menu-category">
                                    <ul class="menu--mobile menu--horizontal">
                                        <li class="daily-deals category-item"> <a href="flash-sale.html">معاملات روزانه</a>
                                        </li>
                                        <li class="category-item"> <a href="shop-categories.html">تخفیف‌های برتر</a>
                                        </li>
                                        <li class="category-item"> <a class="active" href="shop-categories.html">تازه رسیده‌ها</a>
                                        </li>
                                        <li class="has-mega-menu category-item"><a href="javascript:void(0);">تازه</a><span class="sub-toggle"><i class="icon-chevron-down"></i></span>
                                            <div class="mega-menu">
                                                <div class="mega-anchor"></div>
                                                <div class="mega-menu__column">
                                                    <h4>میوه<span class="sub-toggle"></span></h4>
                                                    <ul class="sub-menu--mega">
                                                        <li> <a href="shop-view-grid.html">سیب</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">موز</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">توت</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">پرتقال و لایه بردارهای آسان</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">انگور</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">لیمو</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">هلو و شلیل</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">گلابی</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">ملون</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">آووکادو</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">آلو و زردآلو</a>
                                                        </li>
                                                        <li class="see-all"> <a href="shop-view-grid.html">مشاهده همه محصولات<i class='icon-chevron-left'></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="mega-menu__column">
                                                    <h4>سبزیجات<span class="sub-toggle"></span></h4>
                                                    <ul class="sub-menu--mega">
                                                        <li> <a href="shop-view-grid.html">سیب‌زمینی</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">هویج و سبزیجات ریشه دار</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">کلم بروکلی و گل کلم</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">کلم ، اسفناج و سبزیجات</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">پیاز ، تره فرنگی و سیر</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">قارچ</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">گوجه‌فرنگی</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">لوبیا ، نخود فرنگی و ذرت شیرین</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="has-mega-menu category-item"><a href="javascript:void(0);">کمد غذا</a><span class="sub-toggle"><i class="icon-chevron-down"></i></span>
                                            <div class="mega-menu">
                                                <div class="mega-anchor"></div>
                                                <div class="mega-menu__column">
                                                    <h4>ترد ، تنقلات و آجیل<span class="sub-toggle"></span></h4>
                                                    <ul class="sub-menu--mega">
                                                        <li> <a href="shop-view-grid.html">کریسپس و ذرت بو داده</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">آجیل و دانه ها</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">گزینه های سبک تر</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">میله های غلات</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">نان و مروارید</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">میان‌وعده میوه</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">کیک های برنجی و ذرت</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">میان وعده های پروتئین و انرژی</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">میان وعده های کودک نو پا</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">میان وعده های گوشت</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">لوبیا</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">عدس</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">نخود</a>
                                                        </li>
                                                        <li class="see-all"> <a href="shop-view-grid.html">مشاهده همه محصولات<i class='icon-chevron-left'></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="mega-menu__column">
                                                    <h4>قوطی<span class="sub-toggle"></span></h4>
                                                    <ul class="sub-menu--mega">
                                                        <li> <a href="shop-view-grid.html">گوجه‌فرنگی</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">لوبیای پخته ، اسپاگتی</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">ماهی</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">لوبیا</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">میوه</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">شیرنارگیل و خامه</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">گزینه های سبک تر</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">زیتون</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">ذرت شیرین</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">هویج</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">نخودفرنگی</a>
                                                        </li>
                                                        <li> <a href="shop-view-grid.html">سبزیجات مخلوط</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="mega-menu__column"><a class="mega-menu__thumbnail" href="flash-sale.html"><img src="../assets/img/customer/temp/promotion/mega_food.jpg" alt="alt" /></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="category-item"> <a href="shop-categories.html">نانوایی</a>
                                        </li>
                                        <li class="category-item"> <a href="shop-categories.html">غذای یخ زده</a>
                                        </li>
                                        <li class="category-item"> <a href="shop-categories.html">غذاهای آماده</a>
                                        </li>
                                        <li class="category-item"> <a href="shop-categories.html">نوشیدنی ، چای و قهوه</a>
                                        </li>
                                        <li class="category-item"> <a href="shop-categories.html">آبجو ، شراب</a>
                                        </li>
                                        <li class="category-item"> <a href="shop-categories.html">کودک و بچه</a>
                                        </li>
                                        <li class="category-item"> <a href="shop-categories.html">آشپزخانه و غذاخوری</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="header-inner__center">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="header-search-select"><span class="current">همه<i class="icon-chevron-down"></i></span>
                                    <ul class="list">
                                        <li class="category-option active" data-value="option"><a href="javascript:void(0);">All</a></li>
                                        <li class="category-option"><a>Fresh</a><span class="sub-toggle"><i class="icon-chevron-down"></i></span>
                                            <ul>
                                                <li> <a href="#">گوشت و مرغ</a>
                                                </li>
                                                <li> <a href="#">میوه</a>
                                                </li>
                                                <li> <a href="#">سبزیجات</a>
                                                </li>
                                                <li> <a href="#">شیر ، کره و تخم مرغ</a>
                                                </li>
                                                <li> <a href="#">ماهی</a>
                                                </li>
                                                <li> <a href="#">یخ‌زده</a>
                                                </li>
                                                <li> <a href="#">پنیر</a>
                                                </li>
                                                <li> <a href="#">پاستاو سس</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="category-option"><a>کمد غذا</a><span class="sub-toggle"><i class="icon-chevron-down"></i></span>
                                            <ul>
                                                <li> <a href="#">ترد ، تنقلات و آجیل</a>
                                                </li>
                                                <li> <a href="#">غلات صبحانه</a>
                                                </li>
                                                <li> <a href="#">قوطی و کنسرو</a>
                                                </li>
                                                <li> <a href="#">شکلات و شیرینی</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="category-option" data-value="نانوایی"><a href="javascript:void(0);">نانوایی</a></li>
                                        <li class="category-option" data-value="Drinks, Tea &amp; Coffee"><a href="javascript:void(0);">Drinks, Tea &amp; Coffee</a></li>
                                        <li class="category-option" data-value="غذای یخ زده"><a href="javascript:void(0);">غذای یخ زده</a></li>
                                        <li class="category-option"><a>غذاهای آماده</a><span class="sub-toggle"><i class="icon-chevron-down"></i></span>
                                            <ul>
                                                <li> <a href="#">سنتی انگلیسی</a>
                                                </li>
                                                <li> <a href="#">هندی</a>
                                                </li>
                                                <li> <a href="#">ایتالیایی</a>
                                                </li>
                                                <li> <a href="#">چینی</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="category-option" data-value="Beer, Wine &amp; Spirits"><a href="javascript:void(0);">Beer, Wine &amp; Spirits</a></li>
                                        <li class="category-option" data-value="Baby &amp; Child"><a href="javascript:void(0);">Baby &amp; Child</a></li>
                                        <li class="category-option" data-value="Kitchen &amp; Dining"><a href="javascript:void(0);">Kitchen &amp; Dining</a></li>
                                    </ul>
                                </div><i class="icon-magnifier search"></i>
                            </div>
                            <input class="form-control input-search" placeholder="جست و جو درباره...">
                            <div class="input-group-append">
                                <button class="btn">جستجو</button>
                            </div>
                        </div>
                        <div class="trending-search">
                            <ul class="list-trending">
                                <li class="title"> <a>جستجوهای پرطرفدار: </a>
                                </li>
                                <li class="trending-item"> <a href="#">گوشت</a>
                                </li>
                                <li class="trending-item"> <a href="#">میوه</a>
                                </li>
                                <li class="trending-item"> <a href="#">سبزیجات</a>
                                </li>
                                <li class="trending-item"> <a href="#">سالاد</a>
                                </li>
                                <li class="trending-item"> <a href="#">ماست</a>
                                </li>
                                <li class="trending-item"> <a href="#">سیب</a>
                                </li>
                            </ul>
                        </div>
                        <div class="result-search">
                            <ul class="list-result">
                                <li class="cart-item">
                                    <div class="ps-product--mini-cart"><a href="product-default.html"><img class="ps-product__thumbnail" src="../assets/img/customer/temp/products/01-Fresh/01_18a.jpg" alt="alt" /></a>
                                        <div class="ps-product__content"><a class="ps-product__name" href="product-default.html"><u>ارگانیک</u>فلفل دلمه ای سبز بزرگ</a>
                                            <p class="ps-product__rating">
                                                <select class="rating-stars">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3" selected="selected">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select><span>(5)</span>
                                            </p>
                                            <p class="ps-product__meta"> <span class="ps-product__price">$6.90</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li class="cart-item">
                                    <div class="ps-product--mini-cart"><a href="product-default.html"><img class="ps-product__thumbnail" src="../assets/img/customer/temp/products/01-Fresh/01_16a.jpg" alt="alt" /></a>
                                        <div class="ps-product__content"><a class="ps-product__name" href="product-default.html">آووکادو <u>ارگانیک</u> هاس بزرگ</a>
                                            <p class="ps-product__meta"> <span class="ps-product__price">$12.90</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="header-inner__right">
                        <button class="button-icon icon-md"><i class="icon-repeat"></i></button><a class="button-icon icon-md" href="wishlist.html"><i class="icon-heart"></i><span class="badge bg-warning">2</span></a>
                        <div class="button-icon btn-cart-header"><i class="icon-cart icon-shop5"></i><span class="badge bg-warning">3</span>
                            <div class="mini-cart">
                                <div class="mini-cart--content">
                                    <div class="mini-cart--overlay"></div>
                                    <div class="mini-cart--slidebar cart--box">
                                        <div class="mini-cart__header">
                                            <div class="cart-header-title">
                                                <h5>Shopping Cart(3)</h5><a class="close-cart" href="javascript:void(0);"><i class="icon-arrow-right"></i></a>
                                            </div>
                                        </div>
                                        <div class="mini-cart__products">
                                            <div class="out-box-cart">
                                                <div class="triangle-box">
                                                    <div class="triangle"></div>
                                                </div>
                                            </div>
                                            <ul class="list-cart">
                                                <li class="cart-item">
                                                    <div class="ps-product--mini-cart"><a href="product-default.html"><img class="ps-product__thumbnail" src="../assets/img/customer/temp/products/01-Fresh/01_18a.jpg" alt="alt" /></a>
                                                        <div class="ps-product__content"><a class="ps-product__name" href="product-default.html">تاج‌های کلم بروکلی</a>
                                                            <p class="ps-product__unit">500 گرم</p>
                                                            <p class="ps-product__meta"> <span class="ps-product__price">8000 ریال</span><span class="ps-product__quantity">(x1)</span>
                                                            </p>
                                                        </div>
                                                        <div class="ps-product__remove"><i class="icon-trash2"></i></div>
                                                    </div>
                                                </li>
                                                <li class="cart-item">
                                                    <div class="ps-product--mini-cart"><a href="product-default.html"><img class="ps-product__thumbnail" src="../assets/img/customer/temp/products/01-Fresh/01_31a.jpg" alt="alt" /></a>
                                                        <div class="ps-product__content"><a class="ps-product__name" href="product-default.html">عسل ارگانیک</a>
                                                            <p class="ps-product__unit">100 گرم</p>
                                                            <p class="ps-product__meta"> <span class="ps-product__price-sale">8000 ریال</span><span class="ps-product__is-sale">10000 ریال</span><span class="quantity">(x1)</span>
                                                            </p>
                                                        </div>
                                                        <div class="ps-product__remove"><i class="icon-trash2"></i></div>
                                                    </div>
                                                </li>
                                                <li class="cart-item">
                                                    <div class="ps-product--mini-cart"><a href="product-default.html"><img class="ps-product__thumbnail" src="../assets/img/customer/temp/products/01-Fresh/01_16a.jpg" alt="alt" /></a>
                                                        <div class="ps-product__content"><a class="ps-product__name" href="product-default.html">آبمیوه آووکادو</a>
                                                            <p class="ps-product__unit">1.5 لیتر</p>
                                                            <p class="ps-product__meta"> <span class="ps-product__price">18000 ریال</span><span class="ps-product__quantity">(x1)</span>
                                                            </p>
                                                        </div>
                                                        <div class="ps-product__remove"><i class="icon-trash2"></i></div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="mini-cart__footer row">
                                            <div class="col-6 title">جمع</div>
                                            <div class="col-6 text-right total">42000 ریال</div>
                                            <div class="col-12 d-flex"><a class="view-cart" href="shopping-cart.html">مشاهده سبد خرید</a><a class="checkout" href="checkout.html">وارسی</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <nav class="navigation">
            <div class="container">
                <ul class="menu">
                    <li class="menu-item-has-children has-mega-menu active"><a class="nav-link active" href="javascript:void(0);">خانه</a><span class="sub-toggle"><i class="icon-chevron-down"></i></span>
                        <div class="mega-menu">
                            <div class="mega-anchor"></div>
                            <div class="mega-menu__column">
                                <h4>خانه<span class="sub-toggle"></span></h4>
                                <ul class="sub-menu--mega">
                                    <li> <a class="active" href="index.html">سوپر مارکت اول</a>
                                    </li>
                                    <li> <a href="home-full-width.html">سوپر مارکت دوم</a>
                                    </li>
                                    <li> <a href="home-local-store.html">سوپر مارکت سوم</a>
                                    </li>
                                    <li> <a href="home-sidebar.html">سوپر مارکت چهارم</a>
                                    </li>
                                    <li> <a href="home-business.html">سوپر مارکت پنجم</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="menu-item-has-children has-mega-menu"><a class="nav-link" href="javascript:void(0);">فروشگاه‌ها</a><span class="sub-toggle"><i class="icon-chevron-down"></i></span>
                        <div class="mega-menu mega-shop">
                            <div class="mega-anchor"></div>
                            <div class="mega-menu__column">
                                <h4>میوه فروشی‌ها<span class="sub-toggle"></span></h4>
                                <ul class="sub-menu--mega">
                                    <li> <a href="shop-view-grid.html">میوره فروشی 1</a>
                                    </li>
                                    <li> <a href="shop-view-listing.html">میوره فروشی 2</a>
                                    </li>
                                    <li> <a href="shop-view-extended.html">میوره فروشی 3</a>
                                    </li>
                                    <li> <a href="shop-categories.html">میوره فروشی 4</a>
                                    </li>
                                    <li> <a href="shop-with-banner.html">میوره فروشی 5</a>
                                    </li>
                                    <li> <a href="shop-all-brands.html">میوره فروشی 6</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="mega-menu__column">
                                <h4>خشک‌ بار فروشی<span class="sub-toggle"></span></h4>
                                <ul class="sub-menu--mega">
                                    <li> <a href="product-default.html">خشک‌ بار فروشی 1</a>
                                    </li>
                                    <li> <a href="product-extended.html">خشک‌ بار فروشی 2</a>
                                    </li>
                                    <li> <a href="product-sidebar.html">خشک‌ بار فروشی 3</a>
                                    </li>
                                    <li> <a href="product-full-width.html">خشک‌ بار فروشی 4</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="mega-menu__column">
                                <h4>پروتئین فروشی<span class="sub-toggle"></span></h4>
                                <ul class="sub-menu--mega">
                                    <li> <a href="product-simple.html">پروتئین فروشی 1</a>
                                    </li>
                                    <li> <a href="product-variable.html">پروتئین فروشی 2</a>
                                    </li>
                                    <li> <a href="product-attribute.html">پروتئین فروشی 3</a>
                                    </li>
                                    <li> <a href="product-image-swatches.html">پروتئین فروشی 4</a>
                                    </li>
                                    <li> <a href="product-on-sale.html">پروتئین فروشی 5</a>
                                    </li>
                                    <li> <a href="product-out-of-stock.html">پروتئین فروشی 6</a>
                                    </li>
                                    <li> <a href="product-groupped.html">پروتئین فروشی 7</a>
                                    </li>
                                    <li> <a href="product-countdown-timer.html">پروتئین فروشی 8</a>
                                    </li>
                                    <li> <a href="product-coupon-code.html">پروتئین فروشی 9</a>
                                    </li>
                                    <li> <a href="product-price-list-compare.html">پروتئین فروشی 10</a>
                                    </li>
                                    <li> <a href="product-instagram-feed.html">پروتئین فروشی 11</a>
                                    </li>
                                    <li> <a href="product-video-featured.html">پروتئین فروشی 12</a>
                                    </li>
                                    <li> <a href="product-with-button-buy-now.html">پروتئین فروشی 13</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="mega-menu__column">
                                <h4>قنادی<span class="sub-toggle"></span></h4>
                                <ul class="sub-menu--mega">
                                    <li> <a href="shopping-cart.html">قنادی 1</a>
                                    </li>
                                    <li> <a href="checkout.html">قنادی 2</a>
                                    </li>
                                    <li> <a href="wishlist.html">قنادی 3</a>
                                    </li>
                                    <li> <a href="index.html">قنادی 4</a>
                                    </li>
                                    <li> <a href="order-tracking.html">قنادی 5</a>
                                    </li>
                                    <li> <a href="login-register.html">قنادی 6</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="menu-item-has-children has-mega-menu"><a class="nav-link" href="javascript:void(0);">صفحات</a><span class="sub-toggle"><i class="icon-chevron-down"></i></span>
                        <div class="mega-menu">
                            <div class="mega-anchor"></div>
                            <div class="mega-menu__column">
                                <h4>همه صفحات<span class="sub-toggle"></span></h4>
                                <ul class="sub-menu--mega">
                                    <li> <a href="vendor-registration.html">ثبت نام</a>
                                    </li>
                                    <li> <a href="become-a-vendor.html">پرداخت</a>
                                    </li>
                                    <li> <a href="store-list.html">لیست فروشگاه‌ها</a>
                                    </li>
                                    <li> <a href="vendor-store.html">لیست محصولات</a>
                                    </li>
                                    <li> <a href="flash-sale.html">انتخاب آدرس</a>
                                    </li>
                                    <li> <a href="about-us.html">درباره ما</a>
                                    </li>
                                    <li> <a href="contact.html">تماس با ما</a>
                                    </li>
                                    <li> <a href="faq.html">سوالات متداول</a>
                                    </li>
                                    <li> <a href="404-not-found.html">صفحه 404</a>
                                    </li>
                                    <li> <a href="coming-soon.html">به زودی</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="menu-item-has-children has-mega-menu"><a class="nav-link" href="javascript:void(0);">بلاگ</a><span class="sub-toggle"><i class="icon-chevron-down"></i></span>
                        <div class="mega-menu">
                            <div class="mega-anchor"></div>
                            <div class="mega-menu__column">
                                <h4>نوع بلاگ<span class="sub-toggle"></span></h4>
                                <ul class="sub-menu--mega">
                                    <li> <a href="blog-default.html">مقاله 1</a>
                                    </li>
                                    <li> <a href="blog-thumbnail.html">مقاله 2</a>
                                    </li>
                                    <li> <a href="blog-gird.html">مقاله 3</a>
                                    </li>
                                    <li> <a href="blog-list.html">مقاله 4</a>
                                    </li>
                                    <li> <a href="single-post.html">مقاله 5</a>
                                    </li>
                                    <li> <a href="single-post-sidebar.html">مقاله 6</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <!-- <li class="menu-item-has-children has-mega-menu menu-item-branch"><a class="nav-link" href="javascript:void(0);">Brand</a>
                        <div class="mega-menu mega-brand">
                            <div class="mega-anchor"></div>
                            <div class="brand-box">
                                <div class="brand__title">FEATURED BRAND</div>
                                <div class="row">
                                    <div class="col-4"><a href="shop-view-grid.html"><img src="../assets/img/customer/temp/brand/brand_themeforest.jpg" alt="alt" /></a></div>
                                    <div class="col-4"><a href="shop-view-grid.html"><img src="../assets/img/customer/temp/brand/brand_envato.jpg" alt="alt" /></a></div>
                                    <div class="col-4"><a href="shop-view-grid.html"><img src="../assets/img/customer/temp/brand/brand_codecanyon.jpg" alt="alt" /></a></div>
                                    <div class="col-4"><a href="shop-view-grid.html"><img src="../assets/img/customer/temp/brand/brand_cudicjungle.jpg" alt="alt" /></a></div>
                                    <div class="col-4"><a href="shop-view-grid.html"><img src="../assets/img/customer/temp/brand/brand_videohive.jpg" alt="alt" /></a></div>
                                    <div class="col-4"><a href="shop-view-grid.html"><img src="../assets/img/customer/temp/brand/brand_photodune.jpg" alt="alt" /></a></div>
                                    <div class="col-4"><a href="shop-view-grid.html"><img src="../assets/img/customer/temp/brand/brand_evatotuts.jpg" alt="alt" /></a></div>
                                    <div class="col-4"><a href="shop-view-grid.html"><img src="../assets/img/customer/temp/brand/brand_3docean.jpg" alt="alt" /></a></div>
                                    <div class="col-4"><a href="shop-view-grid.html"><img src="../assets/img/customer/temp/brand/microlancer.jpg" alt="alt" /></a></div>
                                </div><a class="brand__link" href="shop-all-brands.html">See all brands<i class="icon-chevron-right"></i></a>
                            </div>
                            <div class="brand__promotion"><a href="flash-sale.html"><img src="../assets/img/customer/temp/brand/brand_01.jpg" alt="alt" /></a></div>
                            <div class="brand__promotion"><a href="flash-sale.html"><img src="../assets/img/customer/temp/brand/brand_02.jpg" alt="alt" /></a></div>
                        </div>
                    </li>
                    <li class="menu-item-has-children has-mega-menu"> <a class="nav-link" href="flash-sale.html">Flash Sale</a>
                    </li> -->
                </ul>
                <div class="navigation-text">
                    <ul class="menu">
                        <li class="menu-item-has-children has-mega-menu"><a class="nav-link" href="javascript:void(0);">آخرین بازدیدهای شما</a><span class="sub-toggle"><i class="icon-chevron-down"></i></span>
                            <div class="mega-menu recent-view">
                                <div class="mega-anchor"></div>
                                <div class="container">
                                    <div class="slick-many-item">
                                        <a class="recent-item" href="shop-categories.html">
                                            <img src="../assets/img/customer/temp/products/01-Fresh/01_1a.jpg" alt="alt" />
                                        </a>
                                        <a class="recent-item" href="shop-categories.html">
                                            <img src="../assets/img/customer/temp/products/01-Fresh/01_2a.jpg" alt="alt" />
                                        </a>
                                        <a class="recent-item" href="shop-categories.html">
                                            <img src="../assets/img/customer/temp/products/01-Fresh/01_30a.jpg" alt="alt" />
                                        </a>
                                        <a class="recent-item" href="shop-categories.html">
                                            <img src="../assets/img/customer/temp/products/01-Fresh/01_10a.jpg" alt="alt" />
                                        </a><a class="recent-item" href="shop-categories.html">
                                            <img src="../assets/img/customer/temp/products/01-Fresh/01_18a.jpg" alt="alt" />
                                        </a>
                                        <a class="recent-item" href="shop-categories.html">
                                            <img src="../assets/img/customer/temp/products/01-Fresh/01_28b.jpg" alt="alt" />
                                        </a>
                                        <a class="recent-item" href="shop-categories.html">
                                            <img src="../assets/img/customer/temp/products/01-Fresh/01_16a.jpg" alt="alt" />
                                        </a>
                                        <a class="recent-item" href="shop-categories.html">
                                            <img src="../assets/img/customer/temp/products/01-Fresh/01_31a.jpg" alt="alt" />
                                        </a>
                                        <a class="recent-item" href="shop-categories.html">
                                            <img src="../assets/img/customer/temp/products/01-Fresh/01_15a.jpg" alt="alt" />
                                        </a>
                                        <a class="recent-item" href="shop-categories.html">
                                            <img src="../assets/img/customer/temp/products/01-Fresh/01_5a.jpg" alt="alt" />
                                        </a><a class="recent-item" href="shop-categories.html">
                                            <img src="../assets/img/customer/temp/products/01-Fresh/01_32a.jpg" alt="alt" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="mobile-search--slidebar">
            <div class="mobile-search--content">
                <div class="mobile-search__header">
                    <div class="mobile-search-box">
                        <div class="input-group">
                            <input class="form-control" placeholder="I'm shopping for..." id="inputSearchMobile">
                            <div class="input-group-append">
                                <button class="btn"> <i class="icon-magnifier"></i></button>
                            </div>
                        </div>
                        <button class="cancel-search"><i class="icon-cross"></i></button>
                    </div>
                </div>
                <div class="mobile-search__trendding">
                    <h5> <i class="icon-power"></i>Trending search</h5>
                    <div class="trending-content">
                        <ul class="mobile-list-trending">
                            <li class="title"> <a>Trending search: </a>
                            </li>
                            <li class="trending-item"> <a href="#">meat</a>
                            </li>
                            <li class="trending-item"> <a href="#">میوه</a>
                            </li>
                            <li class="trending-item"> <a href="#">سبزیجات</a>
                            </li>
                            <li class="trending-item"> <a href="#">salad</a>
                            </li>
                            <li class="trending-item"> <a href="#">yoghurts</a>
                            </li>
                            <li class="trending-item"> <a href="#">apple</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="mobile-search__history">
                    <h5> <i class="icon-history2"></i>History<a href="javascript:void(0);">Clear all</a></h5>
                    <div class="history-content">
                        <ul class="history-list">
                            <li class="history-item"><a class="history-link" href="javascript:void(0);"> <span>apple</span><i class="icon-cross2"></i></a></li>
                            <li class="history-item"><a class="history-link" href="javascript:void(0);"> <span>ارگانیک میوه</span><i class="icon-cross2"></i></a></li>
                            <li class="history-item"><a class="history-link" href="javascript:void(0);"> <span>meat beef</span><i class="icon-cross2"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="mobile-search__result">
                    <h5> <span class="number-result">5</span>search result</h5>
                    <ul class="list-result">
                        <li class="cart-item">
                            <div class="ps-product--mini-cart"><a href="product-default.html"><img class="ps-product__thumbnail" src="../assets/img/customer/temp/products/01-Fresh/01_18a.jpg" alt="alt" /></a>
                                <div class="ps-product__content"><a class="ps-product__name" href="product-default.html"><u>ارگانیک</u>فلفل دلمه ای سبز بزرگ</a>
                                    <p class="ps-product__rating">
                                        <select class="rating-stars">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3" selected="selected">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select><span>(5)</span>
                                    </p>
                                    <p class="ps-product__meta"> <span class="ps-product__price">$6.90</span>
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li class="cart-item">
                            <div class="ps-product--mini-cart"><a href="product-default.html"><img class="ps-product__thumbnail" src="../assets/img/customer/temp/products/01-Fresh/01_16a.jpg" alt="alt" /></a>
                                <div class="ps-product__content"><a class="ps-product__name" href="product-default.html">آووکادو <u>ارگانیک</u> هاس بزرگ</a>
                                    <p class="ps-product__meta"> <span class="ps-product__price">$12.90</span>
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li class="cart-item">
                            <div class="ps-product--mini-cart"><a href="product-default.html"><img class="ps-product__thumbnail" src="../assets/img/customer/temp/products/01-Fresh/01_32a.jpg" alt="alt" /></a>
                                <div class="ps-product__content"><a class="ps-product__name" href="product-default.html">ژامبون<u>ارگانیک</u> Sandwich</a>
                                    <p class="ps-product__meta"> <span class="ps-product__price">$33.49</span>
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li class="cart-item">
                            <div class="ps-product--mini-cart"><a href="product-default.html"><img class="ps-product__thumbnail" src="../assets/img/customer/temp/products/01-Fresh/01_6a.jpg" alt="alt" /></a>
                                <div class="ps-product__content"><a class="ps-product__name" href="product-default.html">زیاد <u>ارگانیک</u>لایت کن</a>
                                    <p class="ps-product__rating">
                                        <select class="rating-stars">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4" selected="selected">4</option>
                                            <option value="5">5</option>
                                        </select><span>(16)</span>
                                    </p>
                                    <p class="ps-product__meta"> <span class="ps-product__price-sale">$4.99</span><span class="ps-product__is-sale">$8.99</span>
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li class="cart-item">
                            <div class="ps-product--mini-cart"><a href="product-default.html"><img class="ps-product__thumbnail" src="../assets/img/customer/temp/products/01-Fresh/01_22a.jpg" alt="alt" /></a>
                                <div class="ps-product__content"><a class="ps-product__name" href="product-default.html">زیاد <u>ارگانیک</u>لایت کن</a>
                                    <p class="ps-product__meta"> <span class="ps-product__price">$12.99</span>
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>

    <main class="no-main">
        <q-page-container>
        <router-view />
        </q-page-container>
    </main>

    <footer class="ps-footer">
        <div class="container">
            <div class="ps-footer--contact">
                <div class="row">
                    <div class="col-12 col-lg-4">
                        <p class="contact__title">تماس با ما</p>
                        <p><b><i class="icon-telephone"> </i>شماره تلفن: </b><span>(7:00 - 21:30)</span></p>
                        <p class="telephone">097 978-6290<br>097 343-8888</p>
                        <p> <b>تلفن دفتر: </b>شهرک غرب - خیابان دادمان</p>
                        <p> <b>ایمیل: </b><a href="http://nouthemes.net/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="7f0c0a0f0f100d0b3f191e0d121e0d0b511c1012">[email&#160;protected]</a></p>
                    </div>
                    <div class="col-12 col-lg-4">
                        <div class="row">
                            <div class="col-12 col-lg-6">
                                <p class="contact__title">راهنما و اطلاعات<span class="footer-toggle"><i class="icon-chevron-down"></i></span></p>
                                <ul class="footer-list">
                                    <li> <a href="#">درباره ما</a>
                                    </li>
                                    <li> <a href="#">تماس با ما</a>
                                    </li>
                                    <li> <a href="#">محل فروشگاه‌ها</a>
                                    </li>
                                    <li> <a href="#">شرایط استفاده</a>
                                    </li>
                                    <li> <a href="#">خط مشی</a>
                                    </li>
                                    <li> <a href="#">سالات متداول</a>
                                    </li>
                                </ul>
                                <hr>
                            </div>
                            <div class="col-12 col-lg-6">
                                <p class="contact__title">حقوقی<span class="footer-toggle"><i class="icon-chevron-down"></i></span></p>
                                <ul class="footer-list">
                                    <li> <a href="#">فروشنده شوید</a>
                                    </li>
                                    <li> <a href="#">برنامه های وابسته</a>
                                    </li>
                                    <li> <a href="#">تجارت کشاورزی</a>
                                    </li>
                                    <li> <a href="#">مشاغل</a>
                                    </li>
                                    <li> <a href="#">تامین کنندگان ما</a>
                                    </li>
                                    <li> <a href="#">دسترسی</a>
                                    </li>
                                </ul>
                                <hr>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4">
                        <p class="contact__title">اشتراک خبرنامه</p>
                        <p>برای دریافت به روزرسانی ها ، اکنون به اشتراک ایمیل ما بپیوندید</p>
                        <div class="input-group">
                            <div class="input-group-prepend"><i class="icon-envelope"></i></div>
                            <input class="form-control" type="text" placeholder="ایمیل شما...">
                            <div class="input-group-append">
                                <button class="btn">ثبت</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ps-footer--service">
                <div class="row">
                    <div class="col-12 col-lg-4">
                        <div class="service__payment"><img src="../assets/img/customer/temp/promotion/payment_paypal.jpg" alt><img src="../assets/img/customer/temp/promotion/payment_visa.jpg" alt><img src="../assets/img/customer/temp/promotion/payment_mastercart.jpg" alt><img src="../assets/img/customer/temp/promotion/payment_electron.jpg" alt><img src="../assets/img/customer/temp/promotion/payment_skrill.jpg" alt></div>
                        <p class="service__app">برنامه را دانلود کنید <span class="text-success">15000 ریال کوپن دریافت کنید</span></p>
                        <div class="service__download"><a href="contact.html"><img src="../assets/img/customer/temp/promotion/appStore.jpg" alt></a><a href="contact.html"><img src="../assets/img/customer/temp/promotion/googlePlay.jpg" alt></a></div>
                    </div>
                    <div class="col-12 col-lg-4">
                        <table class="table table-bordered">
                            <tr>
                                <td><a href="contact.html"><img src="../assets/img/customer/temp/promotion/badges_01.jpg" alt></a></td>
                                <td><a href="contact.html"><img src="../assets/img/customer/temp/promotion/badges_02.jpg" alt></a></td>
                                <td><a href="contact.html"><img src="../assets/img/customer/temp/promotion/badges_03.jpg" alt></a></td>
                            </tr>
                            <tr>
                                <td><a href="contact.html"><img src="../assets/img/customer/temp/promotion/badges_04.jpg" alt></a></td>
                                <td><a href="contact.html"><img src="../assets/img/customer/temp/promotion/badges_05.jpg" alt></a></td>
                                <td><a href="contact.html"><img src="../assets/img/customer/temp/promotion/badges_06.jpg" alt></a></td>
                            </tr>
                        </table>
                    </div>
                    <div class="col-12 col-lg-4">
                        <div class="service--block">
                            <p class="service__item"> <i class="icon-speed-fast"></i><span> <b>تحویل سریع </b>و حمل سریع</span></p>
                            <p class="service__item"> <i class="icon-color-sampler"></i><span>بالاترین <b>پیشنهادها</b></span></p>
                            <p class="service__item"> <i class="icon-wallet"></i><span>برگشت <b>نقدی</b></span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ps-footer--categories">
                <div class="categories__list"><b>Fresh: </b>
                    <ul class="menu--vertical">
                        <li class="menu-item"> <a href="shop-categories.html">گوشت و مرغ</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">میوه</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">سبزیجات</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">سالاد و گیاهان</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">ماست</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">شیر ، کره و تخم مرغ</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">ژامبون ، غذای آماده</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">پنیر</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">ماهی</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">نان پیتزا و سیر</a>
                        </li>
                    </ul>
                </div>
                <div class="categories__list"><b>کمد غذا: </b>
                    <ul class="menu--vertical">
                        <li class="menu-item"> <a href="shop-categories.html">ترد ، تنقلات و آجیل</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">غلات صبحانه</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">قوطی و کنسرو</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">شکلات و شیرینی</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">بیسکوییت</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">برنج ، ماکارونی</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">مواد لازم پخت و پز</a>
                        </li>
                    </ul>
                </div>
                <div class="categories__list"><b>نانوایی: </b>
                    <ul class="menu--vertical">
                        <li class="menu-item"> <a href="shop-categories.html">نان</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">اگرول</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">کیک و خوراکی</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">کروپت ، کلوچه و پنکیک</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">کروسان و بریوش</a>
                        </li>
                    </ul>
                </div>
                <div class="categories__list"><b>غذای یخ زده: </b>
                    <ul class="menu--vertical">
                        <li class="menu-item"> <a href="shop-categories.html">بستنی</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">میوه ، سبزیجات و گیاهان</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">چیپس ، سیب زمینی و برنج</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">ماهی</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">گیاه خواری</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">گوشت و مرغ</a>
                        </li>
                    </ul>
                </div>
                <div class="categories__list"><b>غذاهای آماده: </b>
                    <ul class="menu--vertical">
                        <li class="menu-item"> <a href="shop-categories.html">هندی</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">ایتالیایی</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">چینی</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">سنتی انگلیسی</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">تایلندی و شرقی</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">مدیترانه ای و مراکشی</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">مکزیکی و کارائیب</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">وعده های غذایی کودکان</a>
                        </li>
                    </ul>
                </div>
                <div class="categories__list"><b>نوشیدنی ، چای و قهوه: </b>
                    <ul class="menu--vertical">
                        <li class="menu-item"> <a href="shop-categories.html">نوشیدنی‌های گازدار</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">آب</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">نوشیدنی، چایی و قهوه</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">اسکواش</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">آب میوه ها</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">میکسر</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">رژیم غذایی و شکر اضافه نشده</a>
                        </li>
                        <li class="menu-item"> <a href="shop-categories.html">هنوز هم درخشان است</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row ps-footer__copyright">
                <div class="col-12 col-lg-6 ps-footer__text">&copy; 2020 فروشگاه محلی. همه حقوق معکوس شده است.</div>
                <div class="col-12 col-lg-6 ps-footer__social"> <a class="icon_social facebook" href="#"><i class="fa fa-facebook-f"></i></a><a class="icon_social twitter" href="#"><i class="fa fa-twitter"></i></a><a class="icon_social google" href="#"><i class="fa fa-google-plus"></i></a><a class="icon_social youtube" href="#"><i class="fa fa-youtube"></i></a><a class="icon_social wifi" href="#"><i class="fa fa-wifi"></i></a></div>
            </div>
        </div>
    </footer>
    <div class="ps-footer-mobile">
        <div class="menu__content">
            <ul class="menu--footer">
                <li class="nav-item"><a class="nav-link" href="index.html"><i class="icon-home3"></i><span>خانه</span></a></li>
                <li class="nav-item"><a class="nav-link footer-category" href="javascript:void(0);"><i class="icon-list"></i><span>دسته‌بندی</span></a></li>
                <li class="nav-item"><a class="nav-link footer-cart" href="shopping-cart.html"><i class="icon-cart"></i><span class="badge bg-warning">3</span><span>سبد</span></a></li>
                <li class="nav-item"><a class="nav-link" href="wishlist.html"><i class="icon-heart"></i><span>لیست علاقه مندیها</span></a></li>
                <li class="nav-item"><a class="nav-link" href="login-register.html"><i class="icon-user"></i><span>حساب</span></a></li>
            </ul>
        </div>
    </div>
    <button class="btn scroll-top"><i class="icon-chevron-up"></i></button>
    <div class="ps-preloader" id="preloader">
        <div class="ps-preloader-section ps-preloader-left"></div>
        <div class="ps-preloader-section ps-preloader-right"></div>
    </div>
    <div class="ps-category--mobile">
        <div class="category__header">
            <div class="category__title">همه بخشها</div><span class="category__close"><i class="icon-cross"></i></span>
        </div>
        <div class="category__content">
            <ul class="menu--mobile">
                <li class="daily-deals category-item"> <a href="flash-sale.html">معاملات روزانه</a>
                </li>
                <li class="category-item"> <a href="shop-categories.html">تخفیف‌های برتر</a>
                </li>
                <li class="category-item"> <a href="shop-categories.html">تازه رسیده‌ها</a>
                </li>
                <li class="menu-item-has-children category-item"><a href="shop-categories.html">تازه</a><span class="sub-toggle"><i class="icon-chevron-down"></i></span>
                    <ul class="sub-menu">
                        <li> <a href="shop-view-grid.html">گوشت و مرغ</a>
                        </li>
                        <li> <a href="shop-view-grid.html">میوه</a>
                        </li>
                        <li> <a href="shop-view-grid.html">سبزیجات</a>
                        </li>
                        <li> <a href="shop-view-grid.html">شیر ، کره و تخم مرغ</a>
                        </li>
                        <li> <a href="shop-view-grid.html">ماهی</a>
                        </li>
                        <li> <a href="shop-view-grid.html">یخ‌زده</a>
                        </li>
                        <li> <a href="shop-view-grid.html">پنیر</a>
                        </li>
                        <li> <a href="shop-view-grid.html">پاستاو سس</a>
                        </li>
                    </ul>
                </li>
                <li class="menu-item-has-children category-item"><a href="shop-categories.html">کمد غذا</a><span class="sub-toggle"><i class="icon-chevron-down"></i></span>
                    <ul class="sub-menu">
                        <li> <a href="shop-view-grid.html">ترد ، تنقلات و آجیل</a>
                        </li>
                        <li> <a href="shop-view-grid.html">غلات صبحانه</a>
                        </li>
                        <li> <a href="shop-view-grid.html">قوطی و کنسرو</a>
                        </li>
                        <li> <a href="shop-view-grid.html">شکلات و شیرینی</a>
                        </li>
                    </ul>
                </li>
                <li class="category-item"> <a href="shop-categories.html">نانوایی</a>
                </li>
                <li class="category-item"> <a href="shop-categories.html">غذای یخ زده</a>
                </li>
                <li class="menu-item-has-children category-item"><a href="shop-categories.html">غذاهای آماده</a><span class="sub-toggle"><i class="icon-chevron-down"></i></span>
                    <ul class="sub-menu">
                        <li> <a href="shop-view-grid.html">سنتی انگلیسی</a>
                        </li>
                        <li> <a href="shop-view-grid.html">هندی</a>
                        </li>
                        <li> <a href="shop-view-grid.html">ایتالیایی</a>
                        </li>
                        <li> <a href="shop-view-grid.html">چینی</a>
                        </li>
                    </ul>
                </li>
                <li class="menu-item-has-children category-item"><a href="shop-categories.html">نوشیدنی، چایی و قهوه</a><span class="sub-toggle"><i class="icon-chevron-down"></i></span>
                    <ul class="sub-menu">
                        <li> <a href="shop-view-grid.html">چایی و کافه</a>
                        </li>
                        <li> <a href="shop-view-grid.html">نوشیدنی‌های گرم</a>
                        </li>
                        <li> <a href="shop-view-grid.html">نوشیدنی‌های گازدار</a>
                        </li>
                        <li> <a href="shop-view-grid.html">آب</a>
                        </li>
                    </ul>
                </li>
                <li class="category-item"> <a href="shop-categories.html">آبجو ، شراب</a>
                </li>
                <li class="category-item"> <a href="shop-categories.html">کودک و بچه</a>
                </li>
                <li class="category-item"> <a href="shop-categories.html">آشپزخانه و غذاخوری</a>
                </li>
            </ul>
        </div>
    </div>
    <nav class="navigation--mobile">
        <div class="navigation__header">
            <div class="navigation__select">
                <div class="languages"><a class="nav-top-link" href="javascript:void(0);"> <span class="current-languages">فارسی</span><i class="icon-chevron-down"></i></a>
                    <div class="select--dropdown">
                        <ul class="select-languages">
                            <li class="language-item" data-value="English"><a href="javascript:void(0);">English</a></li>
                            <li class="active language-item" data-value="Brunei"><a href="javascript:void(0);">فارسی</a></li>
                            <li class="language-item" data-value="Armenia"><a href="javascript:void(0);">Armenia</a></li>
                        </ul>
                    </div>
                </div>
                <div class="currency"><a class="nav-top-link" href="javascript:void(0);"> <span class="current-currency">ریال</span><i class="icon-chevron-down"></i></a>
                    <div class="select--dropdown">
                        <ul class="select-currency">
                            <li class="currency-item" data-value="USD"><a href="javascript:void(0);">USD</a></li>
                            <li class="active currency-item" data-value="ریال"><a href="javascript:void(0);">ریال</a></li>
                            <li class="currency-item" data-value="EUR"><a href="javascript:void(0);">EUR</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="navigation-title">
                <button class="close-navbar-slide"><i class="icon-arrow-left"></i></button>
                <div><span> <i class="icon-user"></i>سلام, </span><span class="account">وحید یوسفنیا</span><a class="dropdown-user" href="#" id="dropdownAccount" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="icon-chevron-down"></i></a>
                    <div class="dropdown-menu" aria-labelledby="dropdownAccount"><a class="dropdown-item" href="#"><b>حساب من</b></a><a class="dropdown-item" href="#">داشبورد</a><a class="dropdown-item" href="#">تنظیمات حساب</a><a class="dropdown-item" href="shopping-cart.html">سفارشات</a><a class="dropdown-item" href="wishlist.html">لیست علاقه مندیها</a><a class="dropdown-item" href="#">آدرس حمل و نقل</a><a class="dropdown-divider"></a><a class="dropdown-item" href="#"><b>تنظیم فروشنده</b></a><a class="dropdown-item" href="#">داشبورد</a><a class="dropdown-item" href="#">محصولات</a><a class="dropdown-item" href="shopping-cart.html">سفارشات</a><a class="dropdown-item" href="#">تنظیمات</a><a class="dropdown-item" href="vendor-store.html">مشاهده فروشگاه</a><a class="dropdown-divider"></a><a class="dropdown-item" href="#"><i class="icon-exit-left"></i>خروج</a></div>
                </div>
            </div>
        </div>
        <div class="navigation__content">
            <ul class="menu--mobile">
                <li class="menu-item-has-children"><a href="#">خانه</a><span class="sub-toggle"><i class="icon-chevron-down"></i></span>
                    <ul class="sub-menu">
                        <li> <a href="index.html">سوپر مارکت</a>
                        </li>
                        <li> <a href="home-full-width.html">سوپر مارکت 2</a>
                        </li>
                        <li> <a href="home-local-store.html">سوپر مارکت 3</a>
                        </li>
                        <li> <a href="home-sidebar.html">سوپر مارکت 4</a>
                        </li>
                        <li> <a href="home-business.html">سوپر مارکت 5</a>
                        </li>
                    </ul>
                </li>
                <li class="menu-item-has-children"><a href="#">فروشگاه‌ها</a><span class="sub-toggle"><i class="icon-chevron-down"></i></span>
                    <ul class="sub-menu">
                        <li> <a href="shop-view-grid.html">میوه فروشی 1</a>
                        </li>
                        <li> <a href="shop-view-listing.html">میوه فروشی 2</a>
                        </li>
                        <li> <a href="shop-view-extended.html">میوه فروشی 3</a>
                        </li>
                        <li> <a href="shop-categories.html">میوه فروشی 4</a>
                        </li>
                        <li> <a href="shop-with-banner.html">میوه فروشی 5</a>
                        </li>
                        <li> <a href="shop-all-brands.html">میوه فروشی 6</a>
                        </li>
                    </ul>
                </li>
                <li class="menu-item-has-children"><a href="#">صفحات</a><span class="sub-toggle"><i class="icon-chevron-down"></i></span>
                    <ul class="sub-menu">
                        <li> <a href="vendor-registration.html">ثبت نام</a>
                        </li>
                        <li> <a href="become-a-vendor.html">پرداخت</a>
                        </li>
                        <li> <a href="store-list.html">لیست فروشگاه‌ها</a>
                        </li>
                        <li> <a href="vendor-store.html">لیست محصولات</a>
                        </li>
                        <li> <a href="flash-sale.html">انتخاب آدرس</a>
                        </li>
                        <li> <a href="about-us.html">درباره ما</a>
                        </li>
                        <li> <a href="contact.html">تماس با ما</a>
                        </li>
                        <li> <a href="faq.html">سالات متداول</a>
                        </li>
                        <li> <a href="404-not-found.html">صفحه 404</a>
                        </li>
                        <li> <a href="coming-soon.html">به زودی</a>
                        </li>
                    </ul>
                </li>
                <li class="menu-item-has-children"><a href="#">وبلاگ</a><span class="sub-toggle"><i class="icon-chevron-down"></i></span>
                    <ul class="sub-menu">
                        <li> <a href="blog-default.html">وبلاگ 1</a>
                        </li>
                        <li> <a href="blog-thumbnail.html">وبلاگ 2</a>
                        </li>
                        <li> <a href="blog-gird.html">وبلاگ 3</a>
                        </li>
                        <li> <a href="blog-list.html">وبلاگ 4</a>
                        </li>
                        <li> <a href="single-post.html">وبلاگ 5</a>
                        </li>
                        <li> <a href="single-post-sidebar.html">وبلاگ 6</a>
                        </li>
                    </ul>
                </li>
                <li class="menu-item-has-children"> <a href="product-default.html">برند</a>
                </li>
                <li class="menu-item-has-children"> <a href="flash-sale.html">فروش فلش</a>
                </li>
            </ul>
            <ul class="menu--mobile">
                <li class="daily-deals"><a>معاملات روزانه</a></li>
            </ul>
        </div>
        <div class="navigation__footer">
            <ul class="menu--icon">
                <li class="footer-item"><a class="footer-link" href="#"><i class="icon-history2"></i><span>بازدید های اخیر</span></a></li>
                <li class="footer-item"><a class="footer-link" href="#"><i class="icon-cube"></i><span>فروشنده شوید</span></a></li>
                <li class="footer-item"><a class="footer-link" href="#"><i class="icon-question-circle"></i><span>راهنما و تماس</span></a></li>
                <li class="footer-item"><a class="footer-link" href="#"><i class="icon-telephone"></i><span>تلفن: <span class='text-success'>(+1) 970 978-6290</span> (رایگان)</span></a></li>
            </ul>
        </div>
    </nav>

  </q-layout>
</template>

<script>
import LoadScript from 'vue-plugin-load-script';
export default {
  name: "MainLayout",
  created(){
      require("../statics/css/customer/bootstrap.min.css")
    require("../statics/css/customer/style.css")
    require('../statics/css/customer/demo.css')
    require("../statics/css/customer/nouislider.min.css")
    require("../statics/css/customer/font-awesome.min.css")
    require("../statics/css/customer/fontawesome-stars.css")
    require("../statics/css/customer/select2.min.css")
    require("../statics/css/customer/owl.carousel.min.css")
    require("../statics/css/customer/slick.css")
    require("../statics/css/customer/lightgallery.min.css")
  },
  mounted() {
    require('../statics/js/customer/jquery.min.js')
    // window.popper = require('../statics/js/customer/popper.min.js')
    require('../statics/js/customer/bootstrap.min.js')
    require('../statics/js/customer/owl.carousel.min.js')
    require('../statics/js/customer/jquery.matchHeight-min.js')
    require('../statics/js/customer/jquery.barrating.min.js')
    require('../statics/js/customer/select2.min.js')
    require('../statics/js/customer/slick.js')
    //require('../statics/js/customer/lightgallery-all.min.js')
    require('../statics/js/customer/main.js')
    require('../statics/js/customer/nouislider.min.js')


    /************************CSS****************************/
    
    
  }
}
</script>
