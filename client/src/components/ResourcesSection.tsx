import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Copy, FileJson, FileText, File, Copy as CopyIcon, Check } from "lucide-react";
import { PromptTemplate, WorkflowFile } from "@/lib/resources-data";

interface ResourcesSectionProps {
  promptTemplates: PromptTemplate[];
  workflowFiles: WorkflowFile[];
}

export function ResourcesSection({ promptTemplates, workflowFiles }: ResourcesSectionProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyPrompt = (promptId: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(promptId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getFileIcon = (format: string) => {
    switch (format) {
      case "json":
        return <FileJson className="w-5 h-5" />;
      case "pdf":
        return <File className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "positive":
        return "bg-green-50 border-green-200 text-green-700";
      case "negative":
        return "bg-red-50 border-red-200 text-red-700";
      case "full":
        return "bg-blue-50 border-blue-200 text-blue-700";
      default:
        return "bg-gray-50 border-gray-200 text-gray-700";
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "positive":
        return "Positive Prompt";
      case "negative":
        return "Negative Prompt";
      case "full":
        return "Complete Prompt";
      default:
        return "Prompt";
    }
  };

  if (promptTemplates.length === 0 && workflowFiles.length === 0) {
    return (
      <Card className="card-elevated p-8 text-center">
        <p className="text-muted-foreground">No resources available for this lesson yet.</p>
      </Card>
    );
  }

  return (
    <Card className="card-elevated">
      <Tabs defaultValue={promptTemplates.length > 0 ? "prompts" : "workflows"} className="w-full">
        <div className="border-b border-border px-6 pt-6">
          <TabsList className="grid w-full grid-cols-2">
            {promptTemplates.length > 0 && (
              <TabsTrigger value="prompts">
                Prompt Templates {promptTemplates.length > 0 && <span className="ml-2 text-xs">({promptTemplates.length})</span>}
              </TabsTrigger>
            )}
            {workflowFiles.length > 0 && (
              <TabsTrigger value="workflows">
                Workflow Files {workflowFiles.length > 0 && <span className="ml-2 text-xs">({workflowFiles.length})</span>}
              </TabsTrigger>
            )}
          </TabsList>
        </div>

        {/* Prompt Templates Tab */}
        {promptTemplates.length > 0 && (
          <TabsContent value="prompts" className="p-6 space-y-4">
            <div className="space-y-4">
              {promptTemplates.map((template) => (
                <Card key={template.id} className="p-4 border border-border hover:border-blue-300 transition-colors">
                  <div className="mb-3">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-heading text-foreground">{template.name}</h3>
                      <span className={`text-xs font-heading px-2 py-1 rounded-full border ${getCategoryColor(template.category)}`}>
                        {getCategoryLabel(template.category)}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{template.description}</p>
                  </div>

                  {/* Prompt Content */}
                  <div className="mb-4 p-3 rounded-lg bg-slate-50 border border-border">
                    <p className="text-sm text-foreground font-mono break-words whitespace-pre-wrap">
                      {template.content}
                    </p>
                  </div>

                  {/* Use Cases */}
                  <div className="mb-4">
                    <p className="text-xs font-heading text-muted-foreground mb-2">Use Cases:</p>
                    <div className="flex flex-wrap gap-2">
                      {template.useCases.map((useCase, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Copy Button */}
                  <Button
                    onClick={() => handleCopyPrompt(template.id, template.content)}
                    variant="outline"
                    size="sm"
                    className="w-full gap-2"
                  >
                    {copiedId === template.id ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <CopyIcon className="w-4 h-4" />
                        Copy Prompt
                      </>
                    )}
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>
        )}

        {/* Workflow Files Tab */}
        {workflowFiles.length > 0 && (
          <TabsContent value="workflows" className="p-6 space-y-4">
            <div className="space-y-4">
              {workflowFiles.map((workflow) => (
                <Card key={workflow.id} className="p-4 border border-border hover:border-blue-300 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0 text-blue-600">
                        {getFileIcon(workflow.format)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-foreground">{workflow.name}</h3>
                        <p className="text-sm text-muted-foreground">{workflow.description}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground whitespace-nowrap ml-4">
                      {workflow.fileSize}
                    </span>
                  </div>

                  {/* Metadata */}
                  <div className="mb-4 flex flex-wrap gap-3 text-xs">
                    <div className="px-2 py-1 rounded-full bg-slate-100 text-slate-700">
                      Format: <span className="font-mono font-heading">{workflow.format.toUpperCase()}</span>
                    </div>
                    <div className="px-2 py-1 rounded-full bg-slate-100 text-slate-700">
                      Tool: <span className="font-mono font-heading">{workflow.tool.toUpperCase()}</span>
                    </div>
                  </div>

                  {/* Download Button */}
                  <Button
                    onClick={() => {
                      // Placeholder for download functionality
                      alert(`Download: ${workflow.name}\n\nNote: This is a demo. In production, this would download the file.`);
                    }}
                    className="w-full gap-2 gradient-accent text-white"
                    size="sm"
                  >
                    <Download className="w-4 h-4" />
                    Download {workflow.format.toUpperCase()}
                  </Button>
                </Card>
              ))}
            </div>

            {/* Bulk Download */}
            {workflowFiles.length > 1 && (
              <Card className="p-4 bg-blue-50 border border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-heading text-blue-900">Download All Files</h4>
                    <p className="text-sm text-blue-800">Get all resources as a single ZIP archive</p>
                  </div>
                  <Button
                    className="gap-2 bg-blue-600 hover:bg-blue-700 text-white"
                    size="sm"
                    onClick={() => {
                      alert("Download: All Resources\n\nNote: This is a demo. In production, this would download a ZIP file.");
                    }}
                  >
                    <Download className="w-4 h-4" />
                    Download ZIP
                  </Button>
                </div>
              </Card>
            )}
          </TabsContent>
        )}
      </Tabs>
    </Card>
  );
}
