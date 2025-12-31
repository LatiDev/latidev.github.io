import BulletPoint from "../components/bullet-point/bullet-point";
import InfiniteScroll from "../components/infinite-scroll/infinite-scroll";
import OverviewGrid from "../components/overview-grid/overview-grid";
import ProductList from "../components/product-list/product-list";
import SimpleGrid from "../components/simple-grid/simple-grid";
import ViewableList from "../components/viewable-list/viewable-list";

export default function Modele() {
  return (
      <>
        <InfiniteScroll/>
        <ProductList/>
        <BulletPoint/>
        <OverviewGrid/>
        <ViewableList/>
        <SimpleGrid/>
    </>
  )
}