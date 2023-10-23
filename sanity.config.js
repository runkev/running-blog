import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from './sanity/schemas';
import {DesktopIcon, CodeBlockIcon} from '@sanity/icons'
import { visionTool } from "@sanity/vision";

const config = defineConfig([
    {
        projectId : "nqg4ooh5",
        dataset: 'production',
        name: 'prod',
        title: 'Production',
        icon: DesktopIcon,
        apiVersion: "2023-10-22",
        basePath: "/prod",
        plugins: [deskTool(), visionTool()],
        schema: { types: schemas },        
    },
    // {
    //     projectId : "3r2a5chv",
    //     dataset: 'development',
    //     name: 'dev',
    //     title: 'MMS Jobs Dev Workspace',
    //     icon: CodeBlockIcon,
    //     apiVersion: "2023-09-27",
    //     basePath: "/development",
    //     plugins: [deskTool(), visionTool()],
    //     schema: { types: schemas },        
    // },


])

export default config;