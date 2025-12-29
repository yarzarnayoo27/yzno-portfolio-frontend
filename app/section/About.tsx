import Section from "../component/Section";

const About = () => {
  return (
    <section id="about" className="mt-25">
      <Section label="About Me">
        <p className="text-gray-400 max-w-xl mx-auto">
          These are some of the projects I’ve built using React and Tailwind
          CSS.
        </p>
      </Section>
    </section>
  );
};

export default About;
