import SeenAll from '../../../../component/seennAll/SeenAll';
import ListProduct from '../../../../component/listProduct/ListProduct';
function ProductShoes() {
    return (
        <>
            <ListProduct categoryName={'Shoes'} cols={4} />

            <SeenAll path="/shoes" />
        </>
    );
}

export default ProductShoes;
