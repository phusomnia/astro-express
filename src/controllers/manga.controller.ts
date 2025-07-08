import { Controller, Get, Post, Route, Tags, Body } from "tsoa";
import { PrismaClient } from "@prisma/client";
import type { Manga } from "@prisma/client";
const prisma = new PrismaClient();

type MangaDTO = Omit<Manga, "id" | "createdAt">;

@Route("api/v1/")
@Tags("Manga")
export class MangaController extends Controller {
  @Get("manga")
  public async getAll(): Promise<MangaDTO[]> {
    return prisma.manga.findMany();
  }

  @Post("manga")
  public async create(@Body() body: MangaDTO): Promise<MangaDTO> {
    return prisma.manga.create({ data: body });
  }
}
