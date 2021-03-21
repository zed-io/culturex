import {Base} from "../parts/base.comp"
import PageHeader from "../parts/page-header.comp"
import PurchaseSection from '../components/purchase-section.comp'
import Title from '../components/title.comp'
import {
  Spacer,
} from "@chakra-ui/layout"

export function Page() {
  return (
    <Base>
      <PageHeader />
      <Spacer />
      <Title/>
      <PurchaseSection/>
    </Base>
  )
}
