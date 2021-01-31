<template>
  <div class="ps-product--standard"><a href="product-default.html"><img class="ps-product__thumbnail" src="../../../../assets/img/customer/temp/product-box-sample.jpg" alt="alt" /></a><a class="ps-product__expand" href="javascript:void(0);" data-toggle="modal" data-target="#popupQuickview"><i class="icon-expand"></i></a><span class="ps-badge ps-product__offbadge">35% تخفیف </span>
    <div class="ps-product__content">
      <p class="ps-product__type"><i class="icon-store"></i>فروشگاه میوه</p>
      <h5><a class="ps-product__name" href="product-default.html">تاج های کلم بروکلی</a></h5>
      <p class="ps-product__unit">300 گرم</p>
      <div class="ps-product__rating">
        <select class="rating-stars">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5" selected="selected">5</option>
        </select><span>(4)</span>
      </div>
      <p class="ps-product-price-block">
        <span class="ps-product__sale">5000 ریال</span>
        <span class="ps-product__price">13000 ریال</span>
      </p>
    </div>
    <div class="ps-product__footer">
      <div class="def-number-input number-input safari_only">
        <button class="minus" onclick="this.parentNode.querySelector('input[type=number]').stepDown()"><i class="icon-minus"></i></button>
        <input class="quantity" min="0" name="quantity" value="1" type="number" />
        <button class="plus" onclick="this.parentNode.querySelector('input[type=number]').stepUp()"><i class="icon-plus"></i></button>
      </div>
      <div class="ps-product__total">جمع: <span>12000 ریال</span>
      </div>
      <button class="ps-product__addcart" data-toggle="modal" data-target="#popupAddToCart"><i class="icon-cart"></i>افزودن به سبد خرید</button>
      <div class="ps-product__box">
        <a class="ps-product__wishlist" href="wishlist.html">لیست علاقه مندیها</a>
        <a class="ps-product__compare" href="wishlist.html">مقایسه کنید</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ProductBox'
}
</script>

<style>

</style>