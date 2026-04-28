"""
Zishijian Project - MiMo API Integration Demo
MiMo API 调用示例代码

适用于小米 MiMo 百万亿Token激励计划申请者
"""

import openai

# 配置 MiMo API 访问
client = openai.OpenAI(
    api_key="YOUR_MIMO_API_KEY",  # 替换为你的 MiMo API Key
    base_url="https://api.mimo.ai/v1"  # MiMo API 端点
)


def generate_universe_story(prompt, context_lore):
    """
    利用 MiMo 1M 超长上下文处理《藏子世间》复杂的宇宙设定
    
    Args:
        prompt: 用户输入的故事生成请求
        context_lore: 世界观设定上下文
    
    Returns:
        生成的故事内容
    """
    response = client.chat.completions.create(
        model="mimo-v2.5-1m",  # MiMo V2.5 长文本模型（1M上下文）
        messages=[
            {"role": "system", "content": f"你是一个资深的东方神话叙事专家。当前世界观设定如下：{context_lore}"},
            {"role": "user", "content": prompt}
        ],
        temperature=0.7,
        max_tokens=2048
    )
    return response.choices[0].message.content


def generate_character_dialogue(character_name, character_setting, user_message):
    """
    生成角色对话（角色扮演）
    
    Args:
        character_name: 角色名称
        character_setting: 角色设定（性格、背景等）
        user_message: 用户对角色说的话
    
    Returns:
        角色的回复
    """
    response = client.chat.completions.create(
        model="mimo-v2.5-1m",
        messages=[
            {"role": "system", "content": f"你是{character_name}。{character_setting}请始终保持角色身份，用第一人称回复。"},
            {"role": "user", "content": user_message}
        ],
        temperature=0.8,
        max_tokens=1024
    )
    return response.choices[0].message.content


def generate_universe_setting(keywords):
    """
    根据关键词生成完整宇宙设定
    
    Args:
        keywords: 用户输入的关键词（如"仙侠"、"都市"、"星际"）
    
    Returns:
        完整的宇宙设定JSON
    """
    prompt = f"""
    请根据以下关键词生成一个完整的宇宙设定，包含：
    1. 世界背景（500字以内）
    2. 主要势力（3-5个）
    3. 核心规则（修行体系/社会规则）
    4. 代表性地点（3-5个）
    
    关键词：{keywords}
    
    请以JSON格式返回。
    """
    
    response = client.chat.completions.create(
        model="mimo-v2.5-1m",
        messages=[
            {"role": "system", "content": "你是一个专业的世界观架构师，擅长创造独特而完整的世界设定。"},
            {"role": "user", "content": prompt}
        ],
        temperature=0.9,
        max_tokens=4096
    )
    return response.choices[0].message.content


# ============ 使用示例 ============

if __name__ == "__main__":
    # 示例1：生成宇宙故事
    lore = "在藏子世间，圆字辈修行者可以感知平行宇宙。目前主角身处'五行紊乱'的衍生西游世界..."
    story = generate_universe_story("描述主角第一次感知到'觉字机缘'的瞬间。", lore)
    print("=== 生成的故事 ===")
    print(story)
    
    # 示例2：角色对话
    # character_setting = "你是菩提祖师的关门弟子，性格沉稳内敛，精通七十二变。"
    # dialogue = generate_character_dialogue("孙悟空", character_setting, "师父，我想学长生不老之术！")
    # print("\n=== 角色对话 ===")
    # print(dialogue)
    
    # 示例3：生成宇宙设定
    # universe = generate_universe_setting("赛博朋克 修仙 反乌托邦")
    # print("\n=== 宇宙设定 ===")
    # print(universe)
