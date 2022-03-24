const AboutPage = () => {
  return (
    <>
      <h1>A Little Bit About Me</h1>
      <h3>I am a software developer at Amazon developing for and maintaining a service that processes and ingests billions of daily device health messages 
        emitted by millions of Ring devices. The services provide insight into device operating state and sends notifications about system status.
      </h3>
      <br></br>
      <h3>
        I graduated from University of California - Irvine with a Bachelors of Science in Computer Science back in 2021. There, I graduated with Magna 
        Cum Laude latin honors with a 3.921 gpa. I also completed two internships while I was attending school: Vusar and Amazon.
      </h3>
      <br></br>
      <h3>
        As a software developer, I strive to deliver products that have great impact, all while performing beyond expectations. When given a problem, I 
        look forward to diving in, but only after I understand the scope. I always want to tackle bigger and bigger problems, because that allows me to 
        improve constantly.
      </h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
