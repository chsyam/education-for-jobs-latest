import Layout from "@/components/Layout";
import styles from "./../styles/Home.module.css"
import { BookOpen, PlayCircle, Users } from "lucide-react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
    const router = useRouter();
    const handleYoutubeRoute = () => {
        window.open("https://www.youtube.com/@EducationwithEntertainment7", "_blank")
    }

    return (
        <Layout className="flex justify-center gap-10">
            <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ${styles.introContainer}`}>
                <div className="text-center mb-16">
                    <h1 className="text-2xl tracking-tight sm:text-6xl mb-6">
                        Learn Telugu the Smart Way
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Access quality educational content in Telugu. From academic subjects to competitive exam preparation,
                        we make learning engaging and effective.
                    </p>
                    <div className={`mt-8 flex justify-center gap-6 ${styles.buttonSection}`}>
                        <Link href="/blogs">
                            <button size="lg" className="gap-2 bg-black text-white">
                                <BookOpen className="h-5 w-5" />
                                Explore Blogs
                            </button>
                        </Link>
                        <Link href="https://www.youtube.com/@EducationwithEntertainment7" target="_blank">
                            <button size="lg" variant="outline" className="gap-2">
                                <PlayCircle className="h-5 w-5" />
                                Watch Videos
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-10 mt-16">
                    <div className={styles.card} onClick={() => handleYoutubeRoute()}>
                        <PlayCircle className="h-12 w-12 mb-4" />
                        <h3 className="text-xl font-semibold mb-4">Video Lessons</h3>
                        <p className="text-muted-foreground">
                            High-quality educational videos explained in simple Telugu language.
                        </p>
                    </div>
                    <div className={styles.card} onClick={() => router.push("/blogs")}>
                        <BookOpen className="h-12 w-12 mb-4" />
                        <h3 className="text-xl font-semibold mb-4">Detailed Blogs</h3>
                        <p className="text-muted-foreground">
                            In-depth articles and study materials to supplement your learning.
                        </p>
                    </div>
                    <div className={styles.card} onClick={() => router.push("/about")}>
                        <Users className="h-12 w-12 mb-4" />
                        <h3 className="text-xl font-semibold mb-4">Community</h3>
                        <p className="text-muted-foreground">
                            Engage with other learners through comments and discussions.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}