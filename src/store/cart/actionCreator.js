import { ADD_CART } from './const'

const actionCreator ={
    getInitialGoods () {
        return dispatch => {
            setTimeout(() => {
                let goods = handler.getCartGoods()
                dispatch({
                    type: ADD_CART,
                    goods
                })
            }, 500)
        }
    },
    addCart ({goods_id,goods_name,goods_price,num,success}) {
        return dispatch => {
            setTimeout(() => {          
                let goods = handler.addCart(goods_id,goods_name,goods_price,num)
                dispatch({
                    type: ADD_CART,
                    goods
                })
                success()
            }, 500)

        }
    },
    changeGoodNum ({goods_id, num, success}) {
        return dispatch => {
            setTimeout(() => {
                let goods = handler.changeGoodNum(goods_id, num);
                dispatch({
                    type: ADD_CART,
                    goods
                })
                success()
            }, 300)

        }
    }
}

export default actionCreator

const handler = {
    getCartGoods () {//获取购物车数据
        return localStorage.goods ? JSON.parse(localStorage.goods) : []
    },
    addCart (goods_id,goods_name,goods_price,num) {//加入购物车
        let goods = this.getCartGoods()
        //判断数组中有没有要加入的商品
        let hasGood = goods.some(good => {
            if (good.goods_id === goods_id) {
                good.num += num
                return true;
            }
            return false;
        })
        if (!hasGood) {//证明没有这个商品
            goods.push({
                goods_id,goods_name,goods_price,num
            })
        }
        localStorage.goods = JSON.stringify(goods)
        return goods
    },
    changeGoodNum (goods_id, num) {
        let goods = this.getCartGoods()
        for (let i = 0; i < goods.length; i++) {
            const good = goods[i];
            if (good.goods_id === goods_id) {
                good.num = num;
                if ( good.num<=0 ) {
                    goods.splice(i, 1)
                }
                break;
            }
        }
        localStorage.goods = JSON.stringify(goods)
        return goods;
    }
}
