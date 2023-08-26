import { toast } from "@/components/ui/use-toast";
import { textProps } from "@/lib/types/textProp";

export async function getData(url: string): Promise<textProps | null> {
  try {
    const res = await fetch(
      `http://192.168.18.87:1337/api/rich-texts?filters[url][$eq]=${url}`,
      { cache: "no-cache" }
    );

    if (!res.ok) {
      toast({
        title: "Cann't Find Your Text",
        variant: "destructive",
        description: "The content you are looking for is not available",
      });
      throw new Error("Failed to fetch data");
    }

    const jsonData = await res.json();
    return jsonData.data[0]; // Assuming you're expecting a single result
  } catch (error) {
    toast({
      title: "Cann't Find Your Text",
      variant: "destructive",
      description: "The content you are looking for is not available",
    });

    return null;
  }
}
