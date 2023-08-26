import { toast } from "@/components/ui/use-toast";
import { filesDataProp } from "@/lib/types/fileDataProp";

export async function getFilesData(url: string): Promise<filesDataProp | null> {
  try {
    const res = await fetch(
      `http://192.168.18.87:1337/api/dhk-files?filters[url][$eq]=${url}`
    );

    if (!res.ok) {
      toast({
        title: "Cann't Find Your Files",
        variant: "destructive",
        description: "The content you are looking for is not available",
      });
      throw new Error("Failed to fetch data");
    }

    const jsonData = await res.json();
    return jsonData.data[0]; // Assuming you're expecting a single result
  } catch (error) {
    toast({
      title: "Cann't Find Your Files",
      variant: "destructive",
      description: "The content you are looking for is not available",
    });

    return null;
  }
}
