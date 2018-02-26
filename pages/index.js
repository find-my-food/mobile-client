import Link from 'next/link'
import {compose, lifecycle, withProps} from 'recompose'
import Head from '../components/head'
import Frame from '../components/frame'
import Header from '../components/header'
import Main from '../components/main'
import List from '../components/list'
import Item from '../components/item'
import Preview from '../components/preview'
import state from '../state'

const enhance = compose(
  withProps(()=>({
    deals: state.deals.map((deal)=>({
      ...deal,
      place: state.places[deal.placeId]
    }))
  }))
)

const Component = ({selectedId, deals}) => (
  <div>
    <Head title="Home" />
    <Frame/>
    <Header>
      {selectedId !== undefined && (
        <Link href="/"><div className="back">Back</div></Link>
      )}

      MealDeal
    </Header>
    <Main>
      {selectedId !== undefined ? <Preview id={selectedId} {...deals[selectedId]}/> : (
        <List>
          {deals.map((props, index)=>(<Item key={index} id={index} {...props}/>))}
        </List>
      )}
    </Main>
  </div>
)

const IndexComponent = enhance(Component)
IndexComponent.getInitialProps = ({query}) => {
  return {
    selectedId: query.id
  }
}

export default IndexComponent
