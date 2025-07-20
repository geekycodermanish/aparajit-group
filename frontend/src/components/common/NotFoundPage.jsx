import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #f8fafc; /* Light gray background */
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const DiagonalElement = styled.div`
  position: absolute;
  top: -50%;
  left: -10%;
  width: 120%;
  height: 200%;
  background: #a3e635; /* bg-lime-400 */
  transform: rotate(45deg);
  z-index: 0;
  opacity: 0.1;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const Title = styled(motion.h1)`
  font-size: 6rem;
  font-weight: 800;
  color: #a3e635; /* bg-lime-400 */
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(163, 230, 53, 0.2);
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 500;
  color: #334155; /* Dark gray */
  margin-bottom: 2rem;
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: #64748b; /* Medium gray */
  max-width: 600px;
  margin-bottom: 3rem;
  line-height: 1.6;
`;

const HomeButton = styled(motion.a)`
  display: inline-block;
  padding: 0.8rem 2rem;
  background: #a3e635; /* bg-lime-400 */
  color: #1e293b; /* Dark text for contrast */
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(163, 230, 53, 0.4);
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(163, 230, 53, 0.6);
    background: #84cc16; /* Slightly darker lime for hover */
  }
`;

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Page Not Found | 404 Error</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Head>
      
      <Container>
        <DiagonalElement />
        <ContentWrapper>
          <Title
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            404
          </Title>
          
          <Subtitle
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Oops! Page not found
          </Subtitle>
          
          <Description
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
          </Description>
          
          <Link href="/" passHref>
            <HomeButton
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Go Back Home
            </HomeButton>
          </Link>
        </ContentWrapper>
      </Container>
    </>
  );
};

export default NotFoundPage;