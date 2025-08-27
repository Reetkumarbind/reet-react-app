import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, Zap, Clock, Wifi } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  connectionType: string;
}

const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when explicitly enabled
    const showMonitor = process.env.NODE_ENV === 'development' || 
                       localStorage.getItem('showPerformanceMonitor') === 'true';
    
    if (!showMonitor) return;

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.fetchStart;
      const renderTime = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
      
      // Memory usage (if available)
      const memoryInfo = (performance as any).memory;
      const memoryUsage = memoryInfo ? memoryInfo.usedJSHeapSize / 1024 / 1024 : 0;
      
      // Connection type (if available)
      const connection = (navigator as any).connection;
      const connectionType = connection ? connection.effectiveType : 'unknown';

      setMetrics({
        loadTime: Math.round(loadTime),
        renderTime: Math.round(renderTime),
        memoryUsage: Math.round(memoryUsage * 100) / 100,
        connectionType
      });
      
      setIsVisible(true);
    };

    // Wait for page to fully load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
      return () => window.removeEventListener('load', measurePerformance);
    }
  }, []);

  // Keyboard shortcut to toggle visibility
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(!isVisible);
        localStorage.setItem('showPerformanceMonitor', (!isVisible).toString());
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isVisible]);

  if (!metrics || !isVisible) return null;

  const getPerformanceColor = (value: number, thresholds: number[]) => {
    if (value <= thresholds[0]) return 'bg-green-500';
    if (value <= thresholds[1]) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="fixed bottom-4 left-4 z-40">
      <Card className="glass border-0 shadow-lg w-64">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <Activity className="w-4 h-4 text-blue-500" />
            <h3 className="text-sm font-semibold">Performance</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="ml-auto text-gray-400 hover:text-gray-600 text-xs"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>Load Time</span>
              </div>
              <Badge 
                className={`${getPerformanceColor(metrics.loadTime, [1000, 3000])} text-white text-xs`}
              >
                {metrics.loadTime}ms
              </Badge>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Zap className="w-3 h-3" />
                <span>Render Time</span>
              </div>
              <Badge 
                className={`${getPerformanceColor(metrics.renderTime, [100, 300])} text-white text-xs`}
              >
                {metrics.renderTime}ms
              </Badge>
            </div>
            
            {metrics.memoryUsage > 0 && (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Activity className="w-3 h-3" />
                  <span>Memory</span>
                </div>
                <Badge 
                  className={`${getPerformanceColor(metrics.memoryUsage, [50, 100])} text-white text-xs`}
                >
                  {metrics.memoryUsage}MB
                </Badge>
              </div>
            )}
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Wifi className="w-3 h-3" />
                <span>Connection</span>
              </div>
              <Badge variant="outline" className="text-xs">
                {metrics.connectionType}
              </Badge>
            </div>
          </div>
          
          <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-500">
              Press Ctrl+Shift+P to toggle
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerformanceMonitor;
