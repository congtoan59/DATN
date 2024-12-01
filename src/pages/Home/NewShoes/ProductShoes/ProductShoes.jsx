import SeenAll from '../../../../component/seennAll/SeenAll';
import ListProduct from '../../../../component/listProduct/ListProduct';
function ProductShoes() {
    return (
        <>
            <ListProduct categoryIndex={[0]} cols={'3'} />

            <SeenAll path="/shoes" />
        </>
    );
}

export default ProductShoes;
