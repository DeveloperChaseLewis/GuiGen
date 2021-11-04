import { useEffect } from 'react';
import { UIFramework, useThemeContext } from '../contexts/theme-context';


const supportedFrameworks = [UIFramework.Bootstrap]
 
const ThemeLink = () => {
    const theme = useThemeContext();

    useEffect(() => {

        if(supportedFrameworks.indexOf(theme.framework) >= 0) {
            const head = document.head;
            const link = document.createElement('link');
            link.type = "text/css";
            link.rel = "stylesheet";
            link.onload = () => {
                console.log(`load ${theme.framework}`)
            }
            switch(theme.framework) {
                case UIFramework.Bootstrap:
                    link.href="/static/bootstrap.min.css";
                    break;
                default:
                    break;
            }
            head.appendChild(link);

            return () => {
                const head = document.head;
                head.removeChild(link);
            };
        }

    },[theme.framework]);

    return (null);
}

export default ThemeLink;