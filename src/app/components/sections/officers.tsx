import ProfileCard from "@/app/components/core/profile-card";
import GenericParagraph from "@/app/components/core/generic-paragraph";

export default function Officers() {
    return (
        <div className='w-auto grid grid-flow-row grid-rows-1 flex-shrink h-auto min-h-[60vh] gap-[75px] px-5 pt-12 mt-5'>
            <ProfileCard name="Sleepy Joe" title="President" src={"/sleepyjoe.jpg"} links={[
              { name: "Twitter", href: "https://twitter.com/realDonaldTrump" },
              { name: "Twitch", href: "https://www.twitch.tv/sleepyjoe" },
              { name: "YouTube", href: "https://www.youtube.com/channel/UC7QXJ4J8D5BYVdUZ5JIHImQ" },
            ]}>
              <GenericParagraph className='text-secondary-500 text-base font-light'>
              Online YouTube Gaming personality recognized as a skilled player of Call of Duty Zombies, with a particular affinity for the game mode.
              In Sleepy Joe's online gaming circles, he is known for his strategic thinking and calm demeanor under pressure, which he developed during his decades-long career in politics. He is also recognized for his ability to work well with others, often serving as the de facto team leader during co-op matches.
              One notable feature of Sleepy Joe's online gaming persona is his penchant for political humor. He enjoys making quips about current events and political figures, often referencing his former political rivals such as Donald Trump and Barack Obama in his in-game banter.
              Despite his busy schedule as the President of the United States, Sleepy Joe finds time to unwind by playing video games, and he is known for his dedication to the hobby. His fellow gamers respect him not only for his skills but also for his ability to balance his responsibilities as a world leader with his personal interests.
              </GenericParagraph>
            </ProfileCard>
            <ProfileCard name="Jordan Peterson" title="Vice President" src={"/jordan.jpg"} links={[
              { name: "Twitter", href: "https://twitter.com/jordanbpeterson" },
              { name: "Twitch", href: "https://www.twitch.tv/jordanpeterson" },
              { name: "YouTube", href: "https://www.youtube.com/channel/UC7QXJ4J8D5BYVdUZ5JIHImQ" },
            ]}>
              <GenericParagraph className='text-secondary-500 text-base font-light'>
              Canadian psychologist, author, and media commentator. He began to receive widespread attention in the late 2010s for his views on cultural and political issues, often described as conservative. Peterson has described himself as a classic British liberal and a traditionalist.
              </GenericParagraph>
            </ProfileCard>
            <ProfileCard name="Elon Musk" title="Treasurer" src={"/elon.jpg"} links={[
              { name: "Twitter", href: "https://twitter.com/elonmusk" },
              { name: "Twitch", href: "https://www.twitch.tv/elonmusk" },
              { name: "YouTube", href: "https://www.youtube.com/channel/UC7QXJ4J8D5BYVdUZ5JIHImQ" },
            ]}>
              <GenericParagraph className='text-secondary-500 text-base font-light'>
              a business magnate and investor. He is the founder, CEO and chief engineer of SpaceX; angel investor, CEO and product architect of Tesla, Inc.; owner and CEO of Twitter, Inc.; founder of the Boring Company; co-founder of Neuralink and OpenAI; and president of the philanthropic Musk Foundation. With an estimated net worth of around $192 billion as of March 27, 2023, primarily from his ownership stakes in Tesla and SpaceX, Musk is the second-wealthiest person in the world, according to both the Bloomberg Billionaires Index and Forbes's real-time billionaires list.
              </GenericParagraph>
            </ProfileCard>
        </div>
    )
}