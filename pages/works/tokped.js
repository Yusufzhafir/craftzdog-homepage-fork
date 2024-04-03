import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
    <Layout title="Margelo">
        <Container>
            <Title>
                PT GoTo Gojek Tokopedia<Badge>2023</Badge>
            </Title>
            <P>
                In the 7th semester, I applied for the 5th batch of the Kampus Merdeka program. I sought to find an internship that could help propel me forward in my career and immerse me in knowledge.
                Applied to 22 vacancy and only got 8 replies to do preliminary-tests. Finally I got interviewed by 4 of them. 2 looks forward for me to joining them,
                and I guess that&apos;s it, gotta pick one of &apos;em. Until, on the last week of recruiting process before the semester starts, Tokopedia reach out to me scheduled an interview for the next day.
                I did the interview with 0 expectations because I thought, I would never be able to. few days remaining and I am about to accept one of the 2 other jobs that accepted me, I went ahead and follow up
                on yesterdays Tokopedia interview to the HR. To my surprise the panel team agreed that I woudl fit in to the team and will give an offer.{' '}<b>Was this my luck? definitely. Was it only luck?
                    probably a few days worth of leetcode problem also helped.</b>
            </P>
            <P>
                <Link href="https://tokopedia.com" target="_blank">
                    Tokopedia <ExternalLinkIcon mx="2px" />
                </Link>
                , is a huge and complex digital technology company. Their main service is to provide a marketplace for people to sell and buy or as people like to call it
                an{' '}<i>E-commerce</i>. They have so many different types of team, handling from the product, infrastructure, to the business partnerships, everything was there; not to mention they have a myriad of sub-products and services. Providing a simple concept to the users
                yet they went all through the troubles to perfecting it. I am assigned to the Insurance and Investment Team as a backend engineer. I learned a lot about golang and scaling infrastructure from them.
                The team was pretty lean considering the scale of the services. It was so fascinating looking at. I work mainly on the insurance-claim service where we handle claims without needing to go to the insurance office.
                The service was not really heavy with traffic but it is very critical to get things right so that the insurance company would be able to detect frauds and the users have the best experience. We had to do rigorous testing
                so that all the edge cases are covered and no bugs could appear in production.
            </P>

            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Service</Meta>
                    <span>
                        <Link href="https://tokpoedia.com/asuransi" target="_blank">
                            https://tokopedia.com/asuransi <ExternalLinkIcon mx="2px" />
                        </Link>
                    </span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>
                        Golang / MySQL / Consul / GCP / Redis / GRPC / GQL
                    </span>
                </ListItem>
            </List>

            <WorkImage src="/images/works/tokped_eyecatch.jpg" alt="Website" />
            <WorkImage src="/images/works/tokped_01.jpg" alt="tokped" />
            <WorkImage src="/images/works/tokped_02.jpg" alt="tokped" />
            <WorkImage src="/images/works/tokped_03.jpg" alt="tokped" />
            <WorkImage src="/images/works/tokped_04.jpg" alt="tokped" />
            <WorkImage src="/images/works/tokped_05.jpg" alt="tokped" />
        </Container>
    </Layout>
)

export default Work
