import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Danone">
    <Container>
      <Title>
        Danone - ADOP <Badge>2023</Badge>
      </Title>
      <P>
        ADOP is an Information System built internaly and for internal use only.
        The software is used mostly for operating purposes in the plant. I was
        working on the HR module with guidance and support from the HR operating
        team. I was given a single instance server to play round with. They told
        me to build it using PHP, MySQL, and the usual HTML,CSS,JS stack to
        fiddle with.
      </P>
      <P>
        <Link href="https://danone.co.id" target="_blank">
          Danone <ExternalLinkIcon mx="2px" />
        </Link>
        , led me to my growth by getting me involved in the development of this
        piece of software. I learned a lot from the non technical side of things
        and made me reevaluate my beliefs on software development. This is such
        a huge curve ball to me, in all my 3 years of college i thought creating
        an IS software is plain , simple, and straighforward. With all the
        strugles we finally did it and finished the software. I was the only dev
        there that built the software but there are people that have their
        finger in the pie. It felt like everybody was rooting for me to finish
        it. It was a great time and a good vibe. My major key take away would
        probably be -
        <b>creating a software is easy, but creating a solution isn&apos;t</b>-.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PHP / MySQL / HTML / CSS / Vanilla JS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/danone_eyecatch.jpg" alt="Website" />
      <WorkImage src="/images/works/danone_01.jpg" alt="danone" />
      <WorkImage src="/images/works/danone_02.jpg" alt="danone" />
      <WorkImage src="/images/works/danone_03.jpg" alt="danone" />
    </Container>
  </Layout>
)

export default Work
