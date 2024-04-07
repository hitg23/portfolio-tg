import ExperienceCard from "./experience-card";

export default function Experience() {
  return (
    <div id="experience">
      <div className="text-2xl pb-8">Experience</div>
      <ExperienceCard
        duration="Feb 2021 - Present"
        title="Solution Ladder - Web Developer"
        description="IT company with a focus on leveraging technology to enhance business outcomes. It is a software
        Shop."
      />
      <ExperienceCard
        duration="Jan 2021 - Mar 2022"
        title="Balemuya - Volunteer Web Developer"
        description="Balemuya is committed to empowering local communities by leveraging their skill sets and utilizing
        technology to match the right skills with specific needs."
      />
    </div>
  );
}
