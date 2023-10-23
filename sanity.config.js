import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from './sanity/schemas';
import {DesktopIcon, CodeBlockIcon} from '@sanity/icons'
import {visionTool} from '@sanity/vision'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

const config = defineConfig([
    {
        projectId,
        dataset,
        name: 'KP_Running_Studio',
        title: 'KP Running Studio',
        icon: DesktopIcon,
        apiVersion: "",
        basePath: "/studio",
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