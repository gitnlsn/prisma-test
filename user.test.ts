import { PrismaClient } from "@prisma/client"

describe("User", () => {
  let prisma: PrismaClient

  beforeAll(() => {
    prisma = new PrismaClient()
  })

  afterAll(async () => {
    await prisma.$disconnect()
  })

  afterEach(async () => {
    await prisma.user.deleteMany({})
  })

  it("should insert user", async () => {
    const user = await prisma.user.create({
      data: {
        email: "test@mail.com",
      },
    })

    expect(user).toBeTruthy()
  })
})
