import Layout from "@/components/Layout";
import styles from "./../../styles/BlogPost.module.css";
import { Clock, Heart } from "lucide-react";
import FeedbackForm from "@/components/feedback/Feedback";

export default function Blog() {
    const formattedTime = (date) => {
        const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        };
        return date.toLocaleString('en-US', options).replace(/,(\s+)/, ' ');
    }

    return (
        <Layout>
            <div className={styles.blogContainer}>
                <div className={styles.blogTitle}>
                    తెలంగాణ చరిత్ర: UPSC కోసం ముఖ్యమైన సంఘటనలు
                </div>
                <div className={styles.blogMetadata}>
                    <div className="cursor-pointer">
                        <Heart size={16} /> {10}
                    </div>
                    <div>
                        <Clock size={16} />
                        {formattedTime(new Date())}
                    </div>
                </div>
                <div className="flex align-center gap-[20px] text-md text-blue-500 font-bolder mt-5">
                    {
                        ['education', 'tag', 'tag'].map((tag, index) => {
                            return (
                                <div key={index}
                                    className="cursor-pointer text-md"
                                    onClick={() => window.open(`/blogs/tag/${tag}`, "_blank")}
                                >
                                    #{tag}
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.videoResources}>
                    <iframe
                        src={`https://www.youtube.com/embed/iEWndm_Wx30`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>
                <div className={styles.blogContent}>
                    UPSC సిద్ధత కోసం తెలంగాణ చరిత్రలోని ముఖ్యమైన చారిత్రక సంఘటనల సమగ్ర అవలోకనం. UPSC సిద్ధత కోసం తెలంగాణ చరిత్రలోని ముఖ్యమైన చారిత్రక సంఘటనల సమగ్ర అవలోకనం. UPSC సిద్ధత కోసం తెలంగాణ చరిత్రలోని ముఖ్యమైన చారిత్రక సంఘటనల సమగ్ర అవలోకనం. UPSC సిద్ధత కోసం తెలంగాణ చరిత్రలోని ముఖ్యమైన చారిత్రక సంఘటనల సమగ్ర అవలోకనం. UPSC సిద్ధత కోసం తెలంగాణ చరిత్రలోని ముఖ్యమైన చారిత్రక సంఘటనల సమగ్ర అవలోకనం.
                </div>
                <div className={styles.feedbackContainer}>
                    <FeedbackForm />
                </div>
            </div>
        </Layout >
    );
}