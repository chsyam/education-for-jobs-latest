import Layout from "@/components/Layout";
import styled from "@emotion/styled";
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import styles from "./../../styles/Blogs.module.css"

export default function BlogsPage() {
    const blogsList = [
        {
            blogId: '1',
            title: "తెలుగు వ్యాకరణం: సమగ్ర మార్గదర్శి",
            description: "వాక్య నిర్మాణం, క్రియా రూపాలు మరియు మరిన్ని అంశాలతో తెలుగు వ్యాకరణ మూలాలను అవగాహన చేసుకోండి.",
            likes: 100,
            comments: 50,
            views: 100,
            author: "Nanna Sai Kumar",
            date: "2024-02-20",
        }, {
            blogId: '1',
            title: "TSPSC కోసం గణితం: ముఖ్యమైన అంశాలు",
            description: "TSPSC పరీక్ష కోసం పరిష్కరించిన ఉదాహరణలతో ముఖ్యమైన గణిత భావనల వివరణాత్మక విశ్లేషణ.",
            likes: 100,
            comments: 50,
            views: 100,
            author: "Nanna Sai Kumar",
            date: "2024-02-20",
        }, {
            blogId: '1',
            title: "తెలుగులో విజ్ఞాన శాస్త్రం: భాగం 1",
            description: "పోటీ పరీక్షల కోసం తెలుగులో సరళంగా వివరించబడిన క్లిష్టమైన విజ్ఞాన శాస్త్ర భావనలు.",
            likes: 100,
            comments: 50,
            views: 100,
            author: "Nanna Sai Kumar",
            date: "2024-02-20",
        }, {
            blogId: '1',
            title: "తెలంగాణ చరిత్ర: UPSC కోసం ముఖ్యమైన సంఘటనలు",
            description: "UPSC సిద్ధత కోసం తెలంగాణ చరిత్రలోని ముఖ్యమైన చారిత్రక సంఘటనల సమగ్ర అవలోకనం.",
            likes: 100,
            comments: 50,
            views: 100,
            author: "Nanna Sai Kumar",
            date: "2024-02-20",
        }, {
            blogId: '1',
            title: "జీవ శాస్త్రం పదాలు: మెడికల్ ప్రవేశ పరీక్షల కోసం",
            description: "NEET మరియు ఇతర వైద్య ప్రవేశ పరీక్షల కోసం ముఖ్యమైన జీవ శాస్త్ర పదజాలం తెలుగులో వివరణలతో.",
            likes: 100,
            comments: 50,
            views: 100,
            author: "Nanna Sai Kumar",
            date: "2024-02-20",
        }
    ];

    return (
        <Layout>
            <div className={styles.blogsContainer}>
                <div className={styles.blogsMenu}>
                    <div className={styles.sectionHead}>
                        Educational Blogs
                    </div>
                    <div className="flex gap-[20px]">
                        <Button variant={`outlined`}>Latest</Button>
                        <Button variant={`outlined`}>Oldest</Button>
                        <Button variant={`outlined`}>Popular</Button>
                    </div>
                </div>
                <div className={styles.blogs}>
                    {
                        blogsList.map((blog, index) => {
                            return (
                                <Card
                                    elevation={5}
                                    sx={{ width: 370, display: 'flex', justifyContent: 'space-between', flexDirection: 'column', padding: '10px', flexGrow: 1 }}
                                    key={index}
                                    onClick={() => {
                                        window.location.href = `/blogs/${blog.blogId}`;
                                    }}
                                >
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" sx={{
                                            display: '-webkit-box',
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                            WebkitLineClamp: 2,
                                            textOverflow: 'ellipsis',
                                            fontSize: '20px',
                                            lineHeight: '24px',
                                            fontWeight: 600,
                                            padding: '5px 0'
                                        }}>
                                            {blog.title}
                                        </Typography>
                                        <Typography variant="body" sx={{
                                            color: 'text.secondary',
                                            display: '-webkit-box',
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                            WebkitLineClamp: 3,
                                            textOverflow: 'ellipsis',
                                            fontSize: '16px',
                                        }}>
                                            {blog.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                        <Button sx={{ gap: '10px', fontSize: '1.1rem' }}>
                                            <Heart /> {blog.likes}
                                        </Button>
                                        <Button sx={{ gap: '10px', fontSize: '1.1rem' }}>
                                            <MessageCircle /> {blog.comments}
                                        </Button>
                                        <Button sx={{ gap: '10px', fontSize: '1.1rem' }}>
                                            <Share2 />
                                        </Button>
                                    </CardActions>
                                </Card>
                            );
                        })
                    }
                </div>
            </div>
        </Layout>
    );
}