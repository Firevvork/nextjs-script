import Link from "next/link";
import styles from "./Post.module.css";
export default function Post({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: string[];
}) {
  return (
    <div className="flex flex-col p-10 justify-start h-screen">
      <div className="flex flex-row justify-between items-center">
        <Link href={"/"}>
          <button className="p-2 text-base bg-blue-500 text-white rounded-md">
            Back
          </button>
        </Link>{" "}
        <h1 className="text-2xl text-center">{title}</h1>
        <button className="invisible p-2 text-base bg-blue-500 text-white rounded-md">
          Back
        </button>
      </div>
      <div className="mt-8 flex flex-col justify-start items-start gap-y-2.5">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className={styles.para}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

{
  /* <p className={styles.para}>
          This is a blog about today&apos;s world. It will contain posts about
          various topics. It&apos; never too late to learn something new.
        </p>
        <p className={styles.para}>So today we will learn about math.</p>
        <p className={styles.para}>
          Math is a subject that is used in everyday life. It is used in
          shopping, cooking, and many other activities. Math is also used in
          science, engineering, and technology. It is a subject that is
          important to learn.
        </p>
        <p className={styles.para}>
          How to use math in the world of computers? Computers use math to solve
          problems. They use math to perform calculations, store data, and
          display information. Math is used in computer programming, software
          development, and computer graphics. It is a subject that is important
          to learn if you want to work in the field of computers.
        </p> */
}
