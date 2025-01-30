import dbconnection from "../DB/connection/connection.js"
import categoryRouter from './modules/Category/category.routes.js'
import subcategoryRouter from './modules/SubCategory/subcategory.routes.js'
import brandRouter from './modules/Brand/brand.routes.js'
import productRouter from './modules/Product/product.router.js'
import userRouter from './modules/User/user.routes.js'
import cartRouter from './modules/Cart/cart.routes.js'
import OrderRouter from './modules/Order/order.routes.js'
import wishListRouter from './modules/wishList/wishList.routes.js'
import CouponRouter from './modules/Coupon/Coupon.routes.js'
import ReviewtRouter from './modules/Review/review.routes.js'
import AddressRouter from './modules/Address/Address.routes.js'





const bootstrap=(app,express)=>{
app.use(express.json())
dbconnection()

app.use('/category',categoryRouter)
app.use('/subcategory',subcategoryRouter)
app.use('/brand',brandRouter)
app.use('/product',productRouter)
app.use('/user',userRouter)
app.use('/cart',cartRouter)
app.use('/Order',OrderRouter)
app.use('/wishlist',wishListRouter)
app.use('/Coupon',CouponRouter)
app.use('/review',ReviewtRouter)
app.use('/Address',AddressRouter)


 

}



export default bootstrap