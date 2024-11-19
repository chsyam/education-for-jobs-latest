import Layout from "@/components/Layout";
import styles from "./../../styles/BlogPost.module.css";
import { Button, Typography } from "@mui/material";
import { Heart } from "lucide-react";

export default function Blog() {
    return (
        <Layout>
            <div className={styles.blogContainer}>
                <div className={styles.blogTitle}>
                    తెలంగాణ చరిత్ర: UPSC కోసం ముఖ్యమైన సంఘటనలు
                </div>
                <div className={styles.blogMetadata}>
                    <Typography sx={{ gap: '10px', fontSize: '1.1rem' }}>
                        <Heart /> {10}
                    </Typography>
                    <Typography sx={{ gap: '10px', fontSize: '1.1rem' }}>
                        {new Date().toDateString()}
                    </Typography>
                </div>
                <div className={styles.blogContent}>
                    UPSC సిద్ధత కోసం తెలంగాణ చరిత్రలోని ముఖ్యమైన చారిత్రక సంఘటనల సమగ్ర అవలోకనం. UPSC సిద్ధత కోసం తెలంగాణ చరిత్రలోని ముఖ్యమైన చారిత్రక సంఘటనల సమగ్ర అవలోకనం. UPSC సిద్ధత కోసం తెలంగాణ చరిత్రలోని ముఖ్యమైన చారిత్రక సంఘటనల సమగ్ర అవలోకనం. UPSC సిద్ధత కోసం తెలంగాణ చరిత్రలోని ముఖ్యమైన చారిత్రక సంఘటనల సమగ్ర అవలోకనం. UPSC సిద్ధత కోసం తెలంగాణ చరిత్రలోని ముఖ్యమైన చారిత్రక సంఘటనల సమగ్ర అవలోకనం.
                </div>
                <div>Comments</div>
                <div></div>
            </div>
        </Layout>
    );
}