"use client";

import { Button } from "@mui/material";
import styles from "./../styles/Navbar.module.css";
import { GraduationCap } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className={`border-b ${styles.navbarContainer}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center space-x-2">
                        <GraduationCap className="h-8 w-8" />
                        <span className={styles.pageTitle}>Education for Jobs</span>
                    </Link>
                    <div className={`flex items-center space-x-4`}>
                    </div>
                </div>
            </div>
        </nav>
    );
}