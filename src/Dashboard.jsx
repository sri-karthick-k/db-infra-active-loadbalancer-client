import React from 'react';
import { Link } from 'react-router-dom';
import config from './config';

function Dashboard() {
    const phpMyAdminPage = config.phpMyAdminPage;
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Dashboard</Link>
                </li>
                <li>
                    <Link to={`${config.phpMyAdminPage}`} target="_blank" rel="noopener noreferrer">phpMyAdmin page</Link>
                </li>
                <li>
                    <Link to={`${config.loadBalancePage}`}>Active Load Balancer</Link>
                </li>
                <li>
                    <Link to={`${config.prometheusPage}`} target="_blank" rel="noopener noreferrer">Prometheus Page</Link>
                </li>
                <li>
                    <Link to={`${config.grafanaMonitoring}`} target="_blank" rel="noopener noreferrer">Grafana Monitoring Page</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Dashboard;
